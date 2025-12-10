import axios, { AxiosInstance, isAxiosError } from 'axios'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'
import { ConfigService } from '@nestjs/config'

interface TypesenseHighlight {
  field: string
  snippet: string
}

export interface TypesenseSearchHit {
  document: Record<string, unknown>
  highlights?: TypesenseHighlight[]
  text_match?: number
}

export interface TypesenseSearchResponse {
  hits: TypesenseSearchHit[]
  found: number
  out_of: number
  page: number
  search_time_ms: number
}

export interface TypesenseSearchParams {
  query: string
  filterBy?: string
  page?: number
  perPage?: number
  includeFields?: string[]
  highlightFields?: string[]
  queryBy?: string
  preset?: string
}

@Injectable()
export class TypesenseService {
  private readonly logger = new Logger(TypesenseService.name)
  private readonly client: AxiosInstance
  private readonly collection: string
  private readonly defaultQueryBy: string
  private readonly defaultIncludeFields?: string[]
  private readonly defaultHighlightFields?: string[]
  private readonly defaultPerPage: number

  constructor(
    private readonly configService: ConfigService,
    private readonly i18n: I18nService,
  ) {
    const host = this.configService.get<string>('TYPESENSE_HOST')
    const port = this.configService.get<string>('TYPESENSE_PORT')
    const protocol = this.configService.get<string>('TYPESENSE_PROTOCOL') ?? 'https'
    const apiKey = this.configService.get<string>('TYPESENSE_API_KEY')
    this.collection = this.configService.get<string>('TYPESENSE_TESTS_COLLECTION') ?? 'tests'
    this.defaultQueryBy =
      this.configService.get<string>('TYPESENSE_TESTS_QUERY_BY') ?? 'test_name,casandra_test_id'
    this.defaultIncludeFields = this.configService
      .get<string>('TYPESENSE_TESTS_INCLUDE_FIELDS')
      ?.split(',')
      .map((field) => field.trim())
      .filter((field) => field.length > 0)
    this.defaultHighlightFields = this.configService
      .get<string>('TYPESENSE_TESTS_HIGHLIGHT_FIELDS')
      ?.split(',')
      .map((field) => field.trim())
      .filter((field) => field.length > 0)
    this.defaultPerPage =
      Number(this.configService.get<string>('SEARCH_KEYWORD_DEFAULT_PER_PAGE') ?? '20') || 20

    if (!host) {
      throw new Error('TYPESENSE_HOST is not configured')
    }
    if (!port) {
      throw new Error('TYPESENSE_PORT is not configured')
    }
    if (!apiKey) {
      throw new Error('TYPESENSE_API_KEY is not configured')
    }

    const baseURL = `${protocol}://${host}:${port}`
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'X-TYPESENSE-API-KEY': apiKey,
      },
      timeout: 10000,
    })
  }

  async search(params: TypesenseSearchParams): Promise<TypesenseSearchResponse> {
    const usePreset = Boolean(params.preset)
    const queryBy = params.queryBy ?? this.defaultQueryBy
    if (!usePreset && !queryBy) {
      throw new Error('Typesense query fields are not configured')
    }
    const includeFields = params.includeFields ?? this.defaultIncludeFields
    const highlightFields = params.highlightFields ?? this.defaultHighlightFields ?? includeFields

    const url = `/collections/${this.collection}/documents/search`
    const searchParams = new URLSearchParams()
    searchParams.set('q', params.query)
    if (params.preset) {
      searchParams.set('preset', params.preset)
    } else {
      searchParams.set('query_by', queryBy)
    }
    searchParams.set('page', String(params.page ?? 1))
    searchParams.set('per_page', String(params.perPage ?? this.defaultPerPage))
    searchParams.set('typo_tokens_threshold', '1')
    searchParams.set('num_typos', '2')
    searchParams.set('drop_tokens_threshold', '1')
    if (params.filterBy?.trim()) {
      searchParams.set('filter_by', params.filterBy)
    }
    if (includeFields && includeFields.length > 0) {
      searchParams.set('include_fields', includeFields.join(','))
    }
    if (highlightFields && highlightFields.length > 0) {
      searchParams.set('highlight_fields', highlightFields.join(','))
      searchParams.set('highlight_full_fields', highlightFields.join(','))
    }

    try {
      const paramsRecord = Object.fromEntries(searchParams.entries())
      this.logger.debug(`Typesense request params: ${JSON.stringify(paramsRecord)}`)

      const response = await this.client.get<TypesenseSearchResponse>(url, {
        params: searchParams,
      })
      return response.data
    } catch (error) {
      const paramsRecord = Object.fromEntries(searchParams.entries())
      if (isAxiosError(error)) {
        const status = error.response?.status ?? 500
        const data = error.response?.data
        const dataString = typeof data === 'string' ? data : data ? JSON.stringify(data) : undefined
        this.logger.error(
          `Typesense search failed: status=${status}${
            dataString ? ` response=${dataString}` : ''
          } params=${JSON.stringify(paramsRecord)}`,
        )

        if (status >= 400 && status < 500) {
          throw new BadRequestException({
            message: await this.translate('typesense_request_rejected'),
            status,
            request: {
              url,
              params: paramsRecord,
            },
            details: data ?? error.message,
          })
        }

        throw new InternalServerErrorException(await this.translate('typesense_search_failed'))
      }

      this.logger.error(
        `Typesense search failed: ${(error as Error).message} params=${JSON.stringify(
          paramsRecord,
        )}`,
      )
      throw new InternalServerErrorException(await this.translate('typesense_search_failed'))
    }
  }

  private translate(key: string, args?: Record<string, unknown>) {
    const lang = I18nContext.current()?.lang
    return this.i18n.translate<string>(`errors.${key}`, { lang, args })
  }
}
