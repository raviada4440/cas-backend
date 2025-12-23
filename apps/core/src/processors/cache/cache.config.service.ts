/**
 * Cache config service.
 * @file Cache 配置器
 * @module processor/cache/config.service
 * @author Surmon <https://github.com/surmon-china>
 */
// import redisStore from 'cache-manager-redis-store'
import redisStore from 'cache-manager-ioredis'

import { REDIS } from '@core/app.config'
import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  // 缓存配置
  public async createCacheOptions(): Promise<CacheModuleOptions> {
    if (REDIS.disableApiCache || !REDIS.url) {
      return {
        store: 'memory',
        ttl: REDIS.ttl ?? undefined,
        max: REDIS.max,
        isCacheableValue: () => true,
      }
    }

    const redisOptions: Record<string, unknown> = {}
    try {
      const parsed = new URL(REDIS.url)
      redisOptions.host = parsed.hostname
      redisOptions.port = parsed.port ? Number(parsed.port) : undefined
      redisOptions.username = parsed.username || undefined
      redisOptions.password = parsed.password || undefined
      redisOptions.tls =
        parsed.protocol === 'rediss:'
          ? {
              rejectUnauthorized: false,
            }
          : undefined
    } catch (error) {
      // Fall back to URL passthrough if parsing fails
      redisOptions.url = REDIS.url
    }

    if (REDIS.ttl !== null && REDIS.ttl !== undefined) {
      redisOptions.ttl = REDIS.ttl
    }
    if (REDIS.max !== null && REDIS.max !== undefined) {
      redisOptions.max = REDIS.max
    }

    const store = await redisStore.create(redisOptions)

    return {
      store,
      ttl: REDIS.ttl ?? undefined,
      max: REDIS.max,
      isCacheableValue: () => true,
    }
  }
}
