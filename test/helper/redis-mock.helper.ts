import { CacheService } from '@core/processors/cache/cache.service'
import { Global, Module } from '@nestjs/common'

class InMemoryRedisClient {
  private strings = new Map<string, string>()
  private hashes = new Map<string, Map<string, string>>()

  async get(key: string) {
    return this.strings.get(key) ?? null
  }

  async set(key: string, value: any) {
    this.strings.set(key, value)
    return 'OK'
  }

  async del(key: string) {
    const deleted =
      (this.strings.delete(key) ? 1 : 0) +
      (this.hashes.delete(key) ? 1 : 0)
    return deleted > 0 ? 1 : 0
  }

  async hexists(key: string, field: string) {
    return this.hashes.get(key)?.has(field) ? 1 : 0
  }

  async hset(key: string, field: string, value: string) {
    const hash = this.hashes.get(key) ?? new Map<string, string>()
    hash.set(field, value)
    this.hashes.set(key, hash)
    return 1
  }

  async hgetall(key: string) {
    const hash = this.hashes.get(key)
    if (!hash) {
      return {}
    }
    return Object.fromEntries(hash.entries())
  }

  async hdel(key: string, field: string) {
    const hash = this.hashes.get(key)
    if (!hash) {
      return 0
    }
    const deleted = hash.delete(field) ? 1 : 0
    if (!hash.size) {
      this.hashes.delete(key)
    }
    return deleted
  }

  async flushall() {
    this.strings.clear()
    this.hashes.clear()
  }

  async quit() {
    // no-op
  }
}

export class MockCacheService {
  private client = new InMemoryRedisClient()

  public get(key: string) {
    return this.client.get(key)
  }

  public set(key: string, value: any) {
    return this.client.set(key, value)
  }

  public getClient() {
    return this.client
  }
}

const createMockRedis = async () => {
  const cacheService = new MockCacheService()

  const provide = {
    provide: CacheService,
    useValue: cacheService,
  }
  @Module({
    providers: [provide],
    exports: [provide],
  })
  @Global()
  class CacheModule {}

  return {
    connect: () => null,
    CacheService: cacheService,
    token: CacheService,
    CacheModule,

    async close() {
      await cacheService.getClient().flushall()
      await cacheService.getClient().quit()
    },
  }
}

export const redisHelper = createMockRedis()
