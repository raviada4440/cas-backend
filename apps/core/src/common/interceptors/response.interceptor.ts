/**
 * 对响应体进行转换结构
 * @author Innei
 */
import { isArray } from 'lodash'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import * as SYSTEM from '@core/constants/system.constant'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

interface EnvelopeLinks {
  next?: string | null
  prev?: string | null
  self?: string | null
}

interface EnvelopeMeta {
  total?: number
  page?: number
  pageSize?: number
  [key: string]: unknown
}

interface Envelope<T> {
  data: T
  meta?: EnvelopeMeta
  links?: EnvelopeLinks
}

const ALLOWED_PAGINATION_KEYS = new Set([
  'items',
  'meta',
  'links',
  'total',
  'page',
  'pageSize',
  'hasNext',
  'hasPrev',
  'nextCursor',
  'prevCursor',
  'cursor',
])

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (!context.switchToHttp().getRequest()) {
      return next.handle()
    }

    const handler = context.getHandler()
    const bypass = this.reflector.get<boolean>(SYSTEM.RESPONSE_PASSTHROUGH_METADATA, handler)
    if (bypass) {
      return next.handle()
    }

    return next.handle().pipe(
      map((body) => {
        // Handle empty responses (204)
        if (typeof body === 'undefined') {
          context.switchToHttp().getResponse().status(204)
          return
        }

        if (isEnvelope(body)) {
          return body
        }

        if (isPaginationPayload(body)) {
          const {
            items,
            meta,
            links,
            total,
            page,
            pageSize,
            hasNext,
            hasPrev,
            nextCursor,
            prevCursor,
            cursor,
          } = body as Record<string, unknown> & { items: unknown[] }

          const combinedMeta: EnvelopeMeta = { ...(meta as EnvelopeMeta | undefined) }
          if (typeof total === 'number' && combinedMeta.total === undefined) {
            combinedMeta.total = total
          }
          if (typeof page === 'number' && combinedMeta.page === undefined) {
            combinedMeta.page = page
          }
          if (typeof pageSize === 'number' && combinedMeta.pageSize === undefined) {
            combinedMeta.pageSize = pageSize
          }
          if (typeof hasNext === 'boolean' && combinedMeta.hasNext === undefined) {
            ;(combinedMeta as EnvelopeMeta & { hasNext?: boolean }).hasNext = hasNext
          }
          if (typeof hasPrev === 'boolean' && combinedMeta.hasPrev === undefined) {
            ;(combinedMeta as EnvelopeMeta & { hasPrev?: boolean }).hasPrev = hasPrev
          }
          if (typeof cursor === 'string' && combinedMeta.cursor === undefined) {
            ;(combinedMeta as EnvelopeMeta & { cursor?: string }).cursor = cursor
          }
          if (combinedMeta.nextCursor === undefined && typeof nextCursor !== 'undefined') {
            ;(combinedMeta as EnvelopeMeta & { nextCursor?: string | null }).nextCursor =
              nextCursor as string | null
          }
          if (
            (combinedMeta as EnvelopeMeta & { prevCursor?: string | null }).prevCursor ===
              undefined &&
            typeof prevCursor !== 'undefined'
          ) {
            ;(combinedMeta as EnvelopeMeta & { prevCursor?: string | null }).prevCursor =
              prevCursor as string | null
          }

          const combinedLinks: EnvelopeLinks = { ...(links as EnvelopeLinks | undefined) }
          if (combinedLinks.next === undefined && typeof nextCursor !== 'undefined') {
            combinedLinks.next = nextCursor as string | null
          }
          if (combinedLinks.prev === undefined && typeof prevCursor !== 'undefined') {
            combinedLinks.prev = prevCursor as string | null
          }

          const normalizedMeta = normalizeMeta(combinedMeta)
          const normalizedLinks = normalizeLinks(combinedLinks)

          return buildEnvelope(items, normalizedMeta, normalizedLinks)
        }

        if (isArray(body)) {
          return buildEnvelope(body)
        }

        return buildEnvelope(body)
      }),
    )
  }
}

function isEnvelope<T>(value: unknown): value is Envelope<T> {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'data' in value &&
      !('items' in (value as Record<string, unknown>)),
  )
}

function isPaginationPayload(
  value: unknown,
): value is Record<string, unknown> & { items: unknown[] } {
  if (!value || typeof value !== 'object' || !('items' in value)) {
    return false
  }
  const items = (value as Record<string, unknown>).items
  if (!Array.isArray(items)) {
    return false
  }

  const keys = Object.keys(value as Record<string, unknown>)
  return keys.every((key) => ALLOWED_PAGINATION_KEYS.has(key))
}

function buildEnvelope<T>(data: T, meta?: EnvelopeMeta, links?: EnvelopeLinks): Envelope<T> {
  return {
    data,
    ...(meta ? { meta } : {}),
    ...(links ? { links } : {}),
  }
}

function normalizeMeta(meta?: EnvelopeMeta): EnvelopeMeta | undefined {
  if (!meta) {
    return undefined
  }

  const entries = Object.entries(meta).filter(([, value]) => typeof value !== 'undefined')
  if (entries.length === 0) {
    return undefined
  }
  return Object.fromEntries(entries)
}

function normalizeLinks(links?: EnvelopeLinks): EnvelopeLinks | undefined {
  if (!links) {
    return undefined
  }
  const entries = Object.entries(links).filter(([, value]) => typeof value !== 'undefined')
  if (entries.length === 0) {
    return undefined
  }
  return Object.fromEntries(entries)
}
