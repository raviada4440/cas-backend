import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@db/client'

import {
  HybridSearchRequest,
  HybridSearchWeightConfig,
  KeywordSearchRequest,
  SearchFilters,
  SearchResponse,
  SearchResultItem,
  SemanticSearchRequest,
} from '@shared/contracts/search'
import { DatabaseService } from '@core/processors/database/database.service'

import { EmbeddingService } from './embedding.service'
import { TypesenseSearchHit, TypesenseSearchParams, TypesenseService } from './typesense.service'

interface VectorSearchRow {
  testId: string
  metadata: Prisma.JsonValue | null
  semanticScore: number
  distance: number
  testName: string | null
  status: string | null
  casandraTestId: string | null
  labId: string | null
  labName: string | null
  testCategory: string | null
  testSubCategory: string | null
}

interface KeywordInternalResult {
  items: SearchResultItem[]
  tookMs: number
  total: number
}

interface SemanticInternalResult {
  items: SearchResultItem[]
  embedding: number[]
  tookMs: number
}

const DEFAULT_KEYWORD_WEIGHT = 0.6
const DEFAULT_SEMANTIC_WEIGHT = 0.4
const ENV_PRESET_KEY = 'TYPESENSE_TESTS_PRESET'
const DEFAULT_VECTOR_DIMENSION = 3072

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name)
  private readonly semanticLimit: number
  private readonly defaultHybridWeights: HybridSearchWeightConfig
  private readonly defaultPreset?: string
  private readonly embeddingDimension: number

  constructor(
    private readonly configService: ConfigService,
    private readonly typesenseService: TypesenseService,
    private readonly embeddingService: EmbeddingService,
    private readonly db: DatabaseService,
  ) {
    this.semanticLimit =
      Number(this.configService.get<string>('SEARCH_SEMANTIC_DEFAULT_LIMIT') ?? '20') || 20
    const keywordWeight =
      Number(this.configService.get<string>('SEARCH_HYBRID_KEYWORD_WEIGHT') ?? '0.6') ||
      DEFAULT_KEYWORD_WEIGHT
    const semanticWeight =
      Number(this.configService.get<string>('SEARCH_HYBRID_SEMANTIC_WEIGHT') ?? '0.4') ||
      DEFAULT_SEMANTIC_WEIGHT
    this.defaultHybridWeights = this.normalizeWeights({
      keyword: keywordWeight,
      semantic: semanticWeight,
    })
    this.defaultPreset = this.configService.get<string>(ENV_PRESET_KEY) ?? undefined
    this.embeddingDimension =
      Number(this.configService.get<string>('SEARCH_SEMANTIC_VECTOR_DIM')) ||
      DEFAULT_VECTOR_DIMENSION
  }

  async keywordSearch(request: KeywordSearchRequest): Promise<SearchResponse> {
    const startedAt = Date.now()
    const result = await this.keywordSearchInternal(request)
    return {
      mode: 'keyword',
      query: request.query,
      count: result.items.length,
      tookMs: Date.now() - startedAt,
      items: result.items,
      debug: {
        keywordCount: result.total,
      },
    }
  }

  async semanticSearch(request: SemanticSearchRequest): Promise<SearchResponse> {
    const startedAt = Date.now()
    const semanticResult = await this.semanticSearchInternal(request)
    return {
      mode: 'semantic',
      query: request.query,
      count: semanticResult.items.length,
      tookMs: Date.now() - startedAt,
      items: semanticResult.items,
      debug: {
        semanticCount: semanticResult.items.length,
      },
    }
  }

  async hybridSearch(request: HybridSearchRequest): Promise<SearchResponse> {
    const startedAt = Date.now()

    const keywordFilters = request.keywordParams?.filters ?? request.filters
    const [keywordResult, semanticResult] = await Promise.all([
      this.keywordSearchInternal({
        query: request.query,
        filters: keywordFilters,
        page: request.keywordParams?.page,
        perPage: request.keywordParams?.perPage,
        includeMetadata: request.keywordParams?.includeMetadata ?? false,
      }),
      this.semanticSearchInternal(request),
    ])

    const weights = this.normalizeWeights(request.weights)
    const map = new Map<string, SearchResultItem>()

    for (const item of keywordResult.items) {
      map.set(item.testId, {
        ...item,
        source: 'hybrid',
        score: weights.keyword * (item.keywordScore ?? 0),
      })
    }

    for (const item of semanticResult.items) {
      const existing = map.get(item.testId)
      if (existing) {
        existing.semanticScore = item.semanticScore
        existing.metadata = existing.metadata ?? item.metadata
        existing.summary = existing.summary ?? item.summary
        if (!existing.testName && item.testName) {
          existing.testName = item.testName
        }
        if (!existing.labId && item.labId) {
          existing.labId = item.labId
        }
        if (!existing.labName && item.labName) {
          existing.labName = item.labName
        }
        existing.score =
          weights.keyword * (existing.keywordScore ?? 0) +
          weights.semantic * (item.semanticScore ?? 0)
      } else {
        map.set(item.testId, {
          ...item,
          source: 'hybrid',
          score: weights.semantic * (item.semanticScore ?? 0),
        })
      }
    }

    const items = Array.from(map.values()).sort((a, b) => b.score - a.score)
    return {
      mode: 'hybrid',
      query: request.query,
      count: items.length,
      tookMs: Date.now() - startedAt,
      items,
      debug: {
        keywordCount: keywordResult.total,
        semanticCount: semanticResult.items.length,
      },
    }
  }

  private async keywordSearchInternal(
    request: KeywordSearchRequest,
  ): Promise<KeywordInternalResult> {
    const startedAt = Date.now()
    const filterBy = this.buildTypesenseFilter(request.filters)

    const typesenseParams: TypesenseSearchParams = {
      query: request.query,
      filterBy,
      page: request.page,
      perPage: request.perPage,
      preset: request.preset ?? this.defaultPreset,
    }

    const response = await this.typesenseService.search(typesenseParams)
    const items = await this.attachTestDetails(
      this.mapKeywordResults(response.hits, request.includeMetadata ?? false),
    )

    return {
      items,
      tookMs: response.search_time_ms ?? Date.now() - startedAt,
      total: response.found ?? items.length,
    }
  }

  private async semanticSearchInternal(
    request: SemanticSearchRequest,
  ): Promise<SemanticInternalResult> {
    const startedAt = Date.now()
    const embedding =
      request.embedding && request.embedding.length > 0
        ? request.embedding
        : await this.embeddingService.embedText(request.query)

    if (embedding.length !== this.embeddingDimension) {
      throw new BadRequestException(
        `Query embedding dimension ${embedding.length} does not match expected ${this.embeddingDimension}`,
      )
    }

    const rows = await this.vectorSearch(embedding, request.filters, request.limit)
    const items = rows.map((row) => {
      const metadata = this.mergeMetadata(row)
      return {
        testId: row.testId,
        score: row.semanticScore,
        keywordScore: null,
        semanticScore: row.semanticScore,
        source: 'semantic',
        highlights: [],
        summary:
          typeof metadata?.summary === 'string'
            ? (metadata.summary as string)
            : (metadata?.highlights as string[])?.[0] ?? null,
        metadata,
        testName: row.testName ?? null,
        labId: row.labId ?? null,
        labName: row.labName ?? null,
      } as SearchResultItem
    })

    return {
      items,
      embedding,
      tookMs: Date.now() - startedAt,
    }
  }

  private mapKeywordResults(
    hits: TypesenseSearchHit[],
    includeMetadata: boolean,
  ): SearchResultItem[] {
    if (!hits?.length) {
      return []
    }

    const maxScore = hits.reduce((acc, hit) => Math.max(acc, hit.text_match ?? 0), 0) || 1

    return hits.map((hit) => {
      const document = this.ensureRecord(hit.document)
      const testIdValue =
        (document?.test_id as string | undefined) ??
        (document?.testId as string | undefined) ??
        (document?.id as string | undefined)
      if (!testIdValue) {
        throw new Error('Typesense document does not contain test identifier')
      }

      const keywordScore = (hit.text_match ?? 0) / maxScore
      const highlights =
        hit.highlights?.map((highlight) => highlight.snippet).filter((snippet) => !!snippet) ?? []

      const metadata = includeMetadata ? document ?? {} : undefined
      const summary =
        (document?.summary as string | undefined) ??
        (document?.description as string | undefined) ??
        null
      const testName =
        (document?.testName as string | undefined) ??
        (document?.test_name as string | undefined) ??
        (document?.name as string | undefined) ??
        null
      const labId =
        (document?.labId as string | undefined) ??
        (document?.lab_id as string | undefined) ??
        (document?.labId as string | undefined) ??
        null
      const labName =
        (document?.labName as string | undefined) ??
        (document?.lab_name as string | undefined) ??
        (document?.lab as string | undefined) ??
        null

      return {
        testId: testIdValue,
        score: keywordScore,
        keywordScore,
        semanticScore: null,
        source: 'keyword',
        highlights,
        summary,
        metadata,
        testName,
        labId: labId ?? null,
        labName,
      }
    })
  }

  private async vectorSearch(
    embedding: number[],
    filters?: SearchFilters,
    limit?: number,
  ): Promise<VectorSearchRow[]> {
    if (!embedding?.length) {
      return []
    }

    const vectorLiteral = `[${embedding.map((value) => Number(value).toString()).join(',')}]`
    const vectorCast = `vector(${this.embeddingDimension})`
    const params: unknown[] = [vectorLiteral]
    const conditions: string[] = []
    conditions.push(`e."embeddingOpenai" IS NOT NULL`)
    let paramIndex = 2

    if (filters?.testIds?.length) {
      params.push(filters.testIds)
      conditions.push(`e."testId" = ANY($${paramIndex}::uuid[])`)
      paramIndex++
    }
    if (filters?.labIds?.length) {
      params.push(filters.labIds)
      conditions.push(`t."labId" = ANY($${paramIndex}::uuid[])`)
      paramIndex++
    }
    if (filters?.statuses?.length) {
      params.push(filters.statuses)
      conditions.push(`t."status" = ANY($${paramIndex}::"TestCatalogStatus"[])`)
      paramIndex++
    }
    if (filters?.categories?.length) {
      params.push(filters.categories)
      conditions.push(`t."testCategory" = ANY($${paramIndex}::text[])`)
      paramIndex++
    }

    params.push(limit ?? this.semanticLimit)
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

    const query = `
      SELECT
        e."testId" AS "testId",
        e.metadata AS "metadata",
        e."embeddingOpenai" <-> $1::${vectorCast} AS "distance",
        1.0 / (1.0 + (e."embeddingOpenai" <-> $1::${vectorCast})) AS "semanticScore",
        t."testName" AS "testName",
        t."status" AS "status",
        t."casandraTestId" AS "casandraTestId",
        t."labId" AS "labId",
        lab."labName" AS "labName",
        t."testCategory" AS "testCategory",
        t."testSubCategory" AS "testSubCategory"
      FROM "TestCatalogEmbedding" e
      INNER JOIN "TestCatalog" t ON t."id" = e."testId"
      LEFT JOIN "Lab" lab ON lab."id" = t."labId"
      ${whereClause}
      ORDER BY e."embeddingOpenai" <-> $1::${vectorCast} ASC
      LIMIT $${paramIndex};
    `

    const rows = (await this.db.prisma.$queryRawUnsafe(query, ...params)) as VectorSearchRow[]
    return rows
  }

  private mergeMetadata(row: VectorSearchRow): Record<string, unknown> | undefined {
    const base = this.ensureRecord(row.metadata) ?? {}
    const enriched = {
      ...base,
      testName: row.testName ?? base.testName,
      status: row.status ?? base.status,
      casandraTestId: row.casandraTestId ?? base.casandraTestId,
      labId: row.labId ?? base.labId,
      labName: row.labName ?? base.labName,
      testCategory: row.testCategory ?? base.testCategory,
      testSubCategory: row.testSubCategory ?? base.testSubCategory,
    }
    return Object.keys(enriched).length > 0 ? enriched : undefined
  }

  private buildTypesenseFilter(filters?: SearchFilters): string | undefined {
    if (!filters) {
      return undefined
    }
    const clauses: string[] = []

    if (filters.testIds?.length) {
      clauses.push(`testId:=[${filters.testIds.map((id) => this.wrapFilterValue(id)).join(',')}]`)
    }
    if (filters.labIds?.length) {
      clauses.push(`labId:=[${filters.labIds.map((id) => this.wrapFilterValue(id)).join(',')}]`)
    }
    if (filters.statuses?.length) {
      clauses.push(
        `status:=[${filters.statuses.map((value) => this.wrapFilterValue(value)).join(',')}]`,
      )
    }
    if (filters.categories?.length) {
      clauses.push(
        `testCategory:=[${filters.categories
          .map((value) => this.wrapFilterValue(value))
          .join(',')}]`,
      )
    }

    return clauses.length > 0 ? clauses.join(' && ') : undefined
  }

  private wrapFilterValue(value: string): string {
    const escaped = value.replace(/"/g, '\\"')
    return `"${escaped}"`
  }

  private normalizeWeights(weights?: HybridSearchWeightConfig | null): HybridSearchWeightConfig {
    if (!weights) {
      return this.defaultHybridWeights
    }
    const keyword =
      typeof weights.keyword === 'number' ? weights.keyword : this.defaultHybridWeights.keyword
    const semantic =
      typeof weights.semantic === 'number' ? weights.semantic : this.defaultHybridWeights.semantic
    const total = keyword + semantic
    if (total === 0) {
      return this.defaultHybridWeights
    }
    return {
      keyword: keyword / total,
      semantic: semantic / total,
    }
  }

  private ensureRecord(value: unknown): Record<string, any> | undefined {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return undefined
    }
    return value as Record<string, any>
  }

  private async attachTestDetails(items: SearchResultItem[]): Promise<SearchResultItem[]> {
    if (!items.length) {
      return items
    }

    const testIds = Array.from(new Set(items.map((item) => item.testId)))
    const tests = (await this.db.prisma.testCatalog.findMany({
      where: { id: { in: testIds } },
      select: {
        id: true,
        testName: true,
        labId: true,
        lab: {
          select: {
            labName: true,
          },
        },
      },
    })) as Array<{
      id: string
      testName: string | null
      labId: string | null
      lab: { labName: string | null } | null
    }>
    const lookup = new Map(
      tests.map((test) => [
        test.id,
        {
          testName: test.testName ?? null,
          labId: test.labId ?? null,
          labName: test.lab?.labName ?? null,
        },
      ]),
    )

    return items.map((item) => {
      const info = lookup.get(item.testId)
      if (!info) {
        return item
      }
      return {
        ...item,
        testName: item.testName ?? info.testName ?? null,
        labId: item.labId ?? info.labId ?? null,
        labName: item.labName ?? info.labName ?? null,
      }
    })
  }
}
