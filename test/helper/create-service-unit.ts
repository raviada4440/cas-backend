import { CacheService } from '@core/processors/cache/cache.service'
import { ModuleMetadata } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { mockedEventManagerServiceProvider } from '@test/mock/helper/helper.event'
import { MockedDatabaseModule } from '@test/mock/processors/database/database.module'

type ClassType<T> = new (...args: any[]) => T
export const createServiceUnitTestApp = <_T>(
  Service: ClassType<_T>,
  module?: ModuleMetadata,
): { service: _T; app: TestingModule } => {
  const proxy = {} as {
    service: _T
    app: TestingModule
  }

  beforeAll(async () => {
    const { imports, providers } = module || {}
    const app = await Test.createTestingModule({
      providers: [
        Service,
        mockedEventManagerServiceProvider,
        {
          provide: CacheService,
          useValue: {},
        },
        ...(providers || []),
      ],
      imports: [
        MockedDatabaseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env.test', '.env'],
        }),
        ...(imports || []),
      ],
    }).compile()
    await app.init()

    const service = app.get<_T>(Service)
    proxy.service = service
    proxy.app = app
  })
  return proxy
}
