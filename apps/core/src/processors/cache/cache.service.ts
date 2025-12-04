import { Cache } from 'cache-manager'
import Redis from 'ioredis'

import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, Logger } from '@nestjs/common'

import { REDIS } from '@core/app.config'

export type TCacheKey = string

@Injectable()
export class CacheService {
  private cache: Cache
  private logger = new Logger(CacheService.name)
  private fallbackClient?: Redis

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

  private ensureFallbackClient(): Redis {
    if (!this.fallbackClient) {
      this.logger.warn('Falling back to direct Redis client initialization.')
      this.fallbackClient = new Redis({
        host: REDIS.host as string,
        port: REDIS.port as number,
        username: REDIS.username ?? undefined,
        password: REDIS.password ?? undefined,
        tls: REDIS.tls
          ? {
              rejectUnauthorized: false,
            }
          : undefined,
      })

      this.fallbackClient.on('error', (error) => {
        this.logger.error('Fallback Redis client error', error as Error)
      })
    }

    return this.fallbackClient
  }

  private safeGetClient(): Redis | undefined {
    const maybeStore = (this.cache as Cache & { store?: unknown }).store ?? this.cache
    if (!maybeStore || typeof maybeStore !== 'object') {
      return this.ensureFallbackClient()
    }

    try {
      const storeWithGetClient = maybeStore as { getClient?: () => Redis }
      if (typeof storeWithGetClient.getClient === 'function') {
        return storeWithGetClient.getClient()
      }

      const storeWithClient = maybeStore as { client?: Redis }
      if (storeWithClient.client) {
        return storeWithClient.client
      }

      const storeDirect = maybeStore as Redis
      if (storeDirect && typeof storeDirect.status === 'string') {
        return storeDirect
      }

      return this.ensureFallbackClient()
    } catch (error) {
      this.logger.error('Failed to acquire Redis client from cache store', error as Error)
      return this.ensureFallbackClient()
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
