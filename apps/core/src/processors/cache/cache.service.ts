import { Cache } from 'cache-manager'
import { Redis } from 'ioredis'

import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, Logger } from '@nestjs/common'

export type TCacheKey = string

@Injectable()
export class CacheService {
  private cache: Cache
  private logger = new Logger(CacheService.name)

  constructor(@Inject(CACHE_MANAGER) cache: Cache) {
    this.cache = cache

    const client = this.safeGetClient()
    if (client) {
      client.on('ready', () => {
        this.logger.log('Redis is ready!')
      })
    } else {
      this.logger.warn('Redis cache client not available; continuing without Redis cache')
    }
  }

  private safeGetClient(): Redis | undefined {
    const maybeStore = (this.cache as Cache & { store?: unknown }).store ?? this.cache
    if (!maybeStore || typeof maybeStore !== 'object') {
      return undefined
    }

    const getClient = (maybeStore as { getClient?: () => Redis }).getClient
    if (typeof getClient !== 'function') {
      return undefined
    }

    try {
      return getClient()
    } catch (error) {
      this.logger.error('Failed to acquire Redis client from cache store', error as Error)
      return undefined
    }
  }

  public get<T>(key: TCacheKey) {
    return this.cache.get<T>(key)
  }

  public set(key: TCacheKey, value: any, ttl?: number | undefined) {
    return this.cache.set(key, value, ttl || 0)
  }

  public getClient(): Redis {
    const client = this.safeGetClient()
    if (!client) {
      throw new Error('Redis client is not available from cache store')
    }
    return client
  }
}
