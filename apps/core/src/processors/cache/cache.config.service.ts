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
    const redisOptions: Record<string, unknown> = {
      host: REDIS.host as string,
      port: REDIS.port as number,
    }
    if (REDIS.tls) {
      redisOptions.tls = {
        rejectUnauthorized: false,
      }
    }
    if (REDIS.password) {
      redisOptions.password = REDIS.password
    }
    if (REDIS.username) {
      redisOptions.username = REDIS.username
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
