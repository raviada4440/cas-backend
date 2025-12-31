import { BadRequestException, Body, Headers, Logger, Post } from '@nestjs/common'
import { Throttle } from '@nestjs/throttler'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { HybridSearchDto, KeywordSearchDto, SemanticSearchDto } from './search.dto'
import { SearchService } from './search.service'

type PublicSearchItem = {
  testId: string
  testName: string | null
  labName: string | null
  summary: string | null
  highlights: string[]
}

type PublicSearchResponse = {
  mode: 'keyword' | 'semantic' | 'hybrid'
  query: string
  count: number
  tookMs: number
  items: PublicSearchItem[]
}

@ApiTags('Public Search')
@ApiController('public/search')
export class PublicSearchController {
  private readonly logger = new Logger(PublicSearchController.name)

  constructor(private readonly searchService: SearchService) {}

  /**
   * Public keyword search endpoint.
   * - Rate limited via Throttle decorator (per IP).
   * - Optional CAPTCHA verification if PUBLIC_SEARCH_CAPTCHA_SECRET is set.
   * - Clamps pagination and strips metadata/debug fields from the response.
   */
  @Post('keyword')
  @Throttle({ default: { limit: 30, ttl: 60 } }) // 30 requests per minute per IP for the public surface
  @ApiOperation({ summary: 'Public keyword search (rate limited, no auth required)' })
  async publicKeywordSearch(
    @Body() body: KeywordSearchDto,
    @Headers('cf-turnstile-token') captchaToken?: string,
  ): Promise<PublicSearchResponse> {
    await this.verifyCaptchaIfEnabled(captchaToken)

    const safeBody = {
      ...body,
      query: this.trimQuery(body.query),
      page: this.clamp(body.page ?? 1, 1, 50),
      perPage: this.clamp(body.perPage ?? 10, 1, 20), // keep small to reduce load
      includeMetadata: false,
    }

    const result = await this.searchService.keywordSearch(safeBody)
    const items: PublicSearchItem[] = result.items.map((item) => ({
      testId: item.testId,
      testName: item.testName ?? null,
      labName: item.labName ?? null,
      summary: item.summary ?? null,
      highlights: item.highlights ?? [],
    }))

    return {
      mode: 'keyword',
      query: result.query,
      count: items.length,
      tookMs: result.tookMs,
      items,
    }
  }

  @Post('semantic')
  @Throttle({ default: { limit: 20, ttl: 60 } }) // tighter limit; semantic is heavier
  @ApiOperation({ summary: 'Public semantic search (rate limited, no auth required)' })
  async publicSemanticSearch(
    @Body() body: SemanticSearchDto,
    @Headers('cf-turnstile-token') captchaToken?: string,
  ): Promise<PublicSearchResponse> {
    await this.verifyCaptchaIfEnabled(captchaToken)

    const safeBody: SemanticSearchDto = {
      ...body,
      query: this.trimQuery(body.query),
      limit: this.clamp(body.limit ?? 10, 1, 20),
      filters: this.nullIfEmptyFilters(body.filters),
      embedding: undefined, // disallow client-provided embeddings on public surface
    }

    const result = await this.searchService.semanticSearch(safeBody)
    const items = this.mapPublicItems(result.items)

    return {
      mode: 'semantic',
      query: result.query,
      count: items.length,
      tookMs: result.tookMs,
      items,
    }
  }

  @Post('hybrid')
  @Throttle({ default: { limit: 20, ttl: 60 } }) // heavier than keyword
  @ApiOperation({ summary: 'Public hybrid search (rate limited, no auth required)' })
  async publicHybridSearch(
    @Body() body: HybridSearchDto,
    @Headers('cf-turnstile-token') captchaToken?: string,
  ): Promise<PublicSearchResponse> {
    await this.verifyCaptchaIfEnabled(captchaToken)

    const safeBody: HybridSearchDto = {
      ...body,
      query: this.trimQuery(body.query),
      filters: this.nullIfEmptyFilters(body.filters),
      keywordParams: {
        ...body.keywordParams,
        page: this.clamp(body.keywordParams?.page ?? 1, 1, 50),
        perPage: this.clamp(body.keywordParams?.perPage ?? 10, 1, 20),
        includeMetadata: false,
      },
      weights: body.weights ?? undefined,
    }

    const result = await this.searchService.hybridSearch(safeBody)
    const items = this.mapPublicItems(result.items)

    return {
      mode: 'hybrid',
      query: result.query,
      count: items.length,
      tookMs: result.tookMs,
      items,
    }
  }

  private trimQuery(query: string): string {
    if (!query) return ''
    const trimmed = query.trim()
    return trimmed.length > 200 ? trimmed.slice(0, 200) : trimmed
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value))
  }

  private nullIfEmptyFilters<T extends { [key: string]: unknown } | undefined | null>(
    filters: T,
  ): T {
    if (!filters) return filters
    const hasValue = Object.values(filters).some((val) => {
      if (Array.isArray(val)) {
        return val.length > 0
      }
      return val !== undefined && val !== null
    })
    return (hasValue ? filters : null) as T
  }

  private mapPublicItems(
    items: Array<{
      testId: string
      testName?: string | null
      labName?: string | null
      summary?: string | null
      highlights?: string[] | null
    }>,
  ): PublicSearchItem[] {
    return items.map((item) => ({
      testId: item.testId,
      testName: item.testName ?? null,
      labName: item.labName ?? null,
      summary: item.summary ?? null,
      highlights: item.highlights ?? [],
    }))
  }

  /**
   * Verifies CAPTCHA (e.g., Cloudflare Turnstile) if PUBLIC_SEARCH_CAPTCHA_SECRET is set.
   * If the secret is not configured, we skip verification to avoid blocking by default.
   */
  private async verifyCaptchaIfEnabled(token?: string): Promise<void> {
    const secret = process.env.PUBLIC_SEARCH_CAPTCHA_SECRET
    if (!secret) {
      return
    }

    if (!token) {
      throw new BadRequestException('CAPTCHA token is required')
    }

    try {
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret,
          response: token,
        }),
      })

      if (!response.ok) {
        this.logger.warn(`CAPTCHA verification failed with status ${response.status}`)
        throw new BadRequestException('CAPTCHA verification failed')
      }

      const payload = (await response.json()) as { success?: boolean }
      if (!payload?.success) {
        throw new BadRequestException('CAPTCHA verification failed')
      }
    } catch (error) {
      this.logger.error('CAPTCHA verification error', error as Error)
      throw new BadRequestException('CAPTCHA verification failed')
    }
  }
}
