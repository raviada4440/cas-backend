import axios, { AxiosInstance, isAxiosError } from 'axios'
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@db/client'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  TypesenseHealthResponse,
  TypesenseSyncRequest,
  TypesenseSyncResponse,
} from '@shared/contracts/search'

const TEST_CATALOG_INCLUDE = {
  lab: true,
  defaultVersion: {
    include: {
      cptCodes: true,
      orderLoincs: { include: { loinc: true } },
      resultLoincs: { include: { loinc: true } },
      biomarkers: { include: { biomarker: true } },
      specimens: true,
    },
  },
} satisfies Prisma.TestCatalogInclude

type TestCatalogWithRelations = Prisma.TestCatalogGetPayload<{
  include: typeof TEST_CATALOG_INCLUDE
}>

interface TypesenseCollectionField {
  name: string
  type: string
  facet?: boolean
}

@Injectable()
export class TypesenseSyncService {
  private readonly logger = new Logger(TypesenseSyncService.name)
  private readonly client: AxiosInstance
  private readonly collection: string
  private readonly collectionSchema: { name: string; fields: TypesenseCollectionField[] }

  constructor(
    private readonly configService: ConfigService,
    private readonly database: DatabaseService,
    private readonly i18n: I18nService,
  ) {
    const host = this.configService.get<string>('TYPESENSE_HOST')
    const port = this.configService.get<string>('TYPESENSE_PORT')
    const protocol = this.configService.get<string>('TYPESENSE_PROTOCOL') ?? 'https'
    const adminApiKey =
      this.configService.get<string>('TYPESENSE_ADMIN_API_KEY') ??
      this.configService.get<string>('TYPESENSE_API_KEY')
    this.collection = this.configService.get<string>('TYPESENSE_TESTS_COLLECTION') ?? 'testcatalog'

    if (!host || !port || !adminApiKey) {
      throw new Error('Typesense configuration is incomplete for sync operations')
    }

    const baseURL = `${protocol}://${host}:${port}`
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'X-TYPESENSE-API-KEY': adminApiKey,
      },
      timeout: 10000,
    })

    this.collectionSchema = {
      name: this.collection,
      fields: [
        { name: 'testId', type: 'string' },
        { name: 'testName', type: 'string' },
        { name: 'labName', type: 'string', facet: true },
        { name: 'casandraTestId', type: 'string' },
        { name: 'labTestId', type: 'string' },
        { name: 'methodology', type: 'string' },
        { name: 'orderLoincsText', type: 'string' },
        { name: 'resultLoincsText', type: 'string' },
        { name: 'testCategory', type: 'string', facet: true },
        { name: 'testSubCategory', type: 'string', facet: true },
        { name: 'labId', type: 'string' },
        { name: 'status', type: 'string', facet: true },
      ],
    }
  }

  async sync(
    request: TypesenseSyncRequest,
    _actorId: string | null,
  ): Promise<TypesenseSyncResponse> {
    switch (request.action) {
      case 'sync-all':
        return this.syncAll()
      case 'sync-single':
        if (!request.testId) {
          throw new NotFoundException(await this.translate('typesense_test_id_required_sync'))
        }
        return this.syncSingle(request.testId)
      case 'remove':
        if (!request.testId) {
          throw new NotFoundException(await this.translate('typesense_test_id_required_remove'))
        }
        return this.remove(request.testId)
      case 'reindex':
        return this.reindex()
      default:
        throw new InternalServerErrorException(
          await this.translate('typesense_action_unsupported', { action: request.action }),
        )
    }
  }

  async health(): Promise<TypesenseHealthResponse> {
    try {
      const response = await this.client.get('/collections')
      const collections = Array.isArray(response.data) ? response.data : []
      const names = collections.map((collection) => collection.name).filter(Boolean)
      return {
        status: 'healthy',
        collections: names.length,
        collectionNames: names,
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      this.logger.error(`Typesense health check failed: ${message}`)
      return {
        status: 'unhealthy',
        error: message,
      }
    }
  }

  private async syncAll(): Promise<TypesenseSyncResponse> {
    await this.ensureCollection()
    const tests = await this.database.prisma.testCatalog.findMany({
      include: TEST_CATALOG_INCLUDE,
    })

    let success = 0
    let errors = 0
    for (const test of tests) {
      try {
        const document = this.buildDocument(test)
        await this.upsertDocument(document)
        success++
      } catch (error) {
        errors++
        this.logger.error(`Failed to index test ${test.id}: ${(error as Error).message}`)
      }
    }

    return {
      success: errors === 0,
      message: `Sync completed with ${success} successful and ${errors} errors`,
      result: {
        total: tests.length,
        successful: success,
        errors,
      },
    }
  }

  private async syncSingle(testId: string): Promise<TypesenseSyncResponse> {
    await this.ensureCollection()
    const test = await this.database.prisma.testCatalog.findUnique({
      where: { id: testId },
      include: TEST_CATALOG_INCLUDE,
    })

    if (!test) {
      throw new NotFoundException(await this.translate('test_not_found_with_id', { id: testId }))
    }

    const document = this.buildDocument(test)
    await this.upsertDocument(document)

    return {
      success: true,
      message: `Test ${testId} synced successfully`,
      result: document,
    }
  }

  private async remove(testId: string): Promise<TypesenseSyncResponse> {
    await this.ensureCollection()
    await this.deleteDocument(testId)

    return {
      success: true,
      message: `Test ${testId} removed successfully`,
    }
  }

  private async reindex(): Promise<TypesenseSyncResponse> {
    await this.ensureCollection(true)
    return this.syncAll()
  }

  private async ensureCollection(forceRecreate = false): Promise<void> {
    try {
      if (forceRecreate) {
        await this.client.delete(`/collections/${this.collection}`).catch(() => undefined)
      }

      await this.client.get(`/collections/${this.collection}`)
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 404) {
        this.logger.log(`Creating Typesense collection ${this.collection}`)
        await this.client.post('/collections', this.collectionSchema)
        return
      }

      this.logger.error(`Failed to ensure Typesense collection: ${(error as Error).message}`)
      throw new InternalServerErrorException(await this.translate('typesense_collection_failed'))
    }
  }

  private async upsertDocument(document: Record<string, unknown>): Promise<void> {
    await this.client.post(`/collections/${this.collection}/documents`, document, {
      params: { action: 'upsert' },
    })
  }

  private async deleteDocument(testId: string): Promise<void> {
    await this.client
      .delete(`/collections/${this.collection}/documents/${testId}`)
      .catch((error) => {
        if (isAxiosError(error) && error.response?.status === 404) {
          return
        }
        throw error
      })
  }

  private buildDocument(test: TestCatalogWithRelations): Record<string, unknown> {
    const version = test.defaultVersion

    const orderLoincs = version?.orderLoincs?.map((l) => l.loincCode).filter(Boolean) ?? []
    const resultLoincs = version?.resultLoincs?.map((l) => l.loincCode).filter(Boolean) ?? []
    const orderLoincsText =
      version?.orderLoincs
        ?.map((l) => l.loinc?.longCommonName || l.loinc?.displayName || '')
        .filter(Boolean)
        .join('; ') ?? ''
    const resultLoincsText =
      version?.resultLoincs
        ?.map((l) => l.loinc?.longCommonName || l.loinc?.displayName || '')
        .filter(Boolean)
        .join('; ') ?? ''
    const cptCodes = version?.cptCodes?.map((c) => c.cptCode).filter(Boolean) ?? []
    const biomarkers = version?.biomarkers?.map((b) => b.hgncId).filter(Boolean) ?? []
    const specimenTypes = version?.specimens?.map((s) => s.specimenType).filter(Boolean) ?? []
    const specimenContainers = version?.specimens?.map((s) => s.container).filter(Boolean) ?? []
    const specimenRequirements =
      version?.specimens?.map((s) => s.specimenRequirements).filter(Boolean) ?? []
    const stabilityRequirements =
      version?.specimens?.map((s) => s.stabilityRequirements).filter(Boolean) ?? []
    const storageTransportation =
      version?.specimens?.map((s) => s.storageTransportation).filter(Boolean) ?? []
    const collectionMethod = version?.specimens?.map((s) => s.collection).filter(Boolean) ?? []
    const diseasesList =
      version?.diseases || test.testName
        ? String(version?.diseases || test.testName || '')
            .split(/[,;\n]+/)
            .map((value) => value.trim())
            .filter(Boolean)
        : []

    return {
      id: String(test.id),
      testId: String(test.id),
      testName: test.testName ?? version?.testName ?? '',
      labName: test.lab?.labName ?? '',
      status: test.status ?? '',
      currentVersion: Number(version?.versionNumber ?? 1),
      testDescription: version?.testDescription ?? '',
      methodology: version?.methodology ?? '',
      testCategory: test.testCategory ?? '',
      testSubCategory: test.testSubCategory ?? '',
      diseases: diseasesList,
      orderLoincs,
      resultLoincs,
      cptCodes,
      biomarkers,
      orderLoincsText,
      resultLoincsText,
      specimenTypes,
      specimenContainers,
      specimenRequirements,
      stabilityRequirements,
      storageTransportation,
      collectionMethod,
      casandraTestId: test.casandraTestId ?? '',
      updatedAt: test.updatedAt ? Math.floor(new Date(test.updatedAt).getTime() / 1000) : 0,
      labId: test.labId ?? '',
    }
  }

  private translate(key: string, args?: Record<string, unknown>) {
    const lang = I18nContext.current()?.lang
    return this.i18n.translate<string>(`errors.${key}`, { lang, args })
  }
}
