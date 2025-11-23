import { LoggerModule } from 'nestjs-pretty-logger'

import { Module, Type } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE, HttpAdapterHost } from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'

import { AppController } from './app.controller'
import { AllExceptionsFilter } from './common/filters/all-exception.filter'
import { PrismaClientExceptionFilter } from './common/filters/prisma-client-exception.filter'
import { HttpCacheInterceptor } from './common/interceptors/cache.interceptor'
import { IdempotenceInterceptor } from './common/interceptors/idempotence.interceptor'
import { JSONTransformerInterceptor } from './common/interceptors/json-transformer.interceptor'
import { ResponseInterceptor } from './common/interceptors/response.interceptor'
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe'
import { AuthModule } from './modules/auth/auth.module'
import { CatalogModule } from './modules/catalog/catalog.module'
import { ReferenceDataModule } from './modules/reference-data/reference-data.module'
import { UserModule } from './modules/user/user.module'
import { OrdersModule } from './modules/orders/orders.module'
import { AdminModule } from './modules/admin/admin.module'
import { CacheModule } from './processors/cache/cache.module'
import { DatabaseModule } from './processors/database/database.module'
import { GatewayModule } from './processors/gateway/gateway.module'
import { HelperModule } from './processors/helper/helper.module'

// Request ----->
// Response <-----
const appInterceptors: Type[] = [IdempotenceInterceptor, HttpCacheInterceptor, ResponseInterceptor]
const envFilePath = process.env['DOTENV_CONFIG_PATH'] || '.env'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      expandVariables: true,
      ignoreEnvFile: false,
    }),
    // processors
    CacheModule,
    DatabaseModule,
    HelperModule,
    LoggerModule,
    GatewayModule,

    // BIZ
    AuthModule,
    UserModule,
    CatalogModule,
    ReferenceDataModule,
    OrdersModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    ...appInterceptors.map((interceptor) => ({
      provide: APP_INTERCEPTOR,
      useClass: interceptor,
    })),

    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },

    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },

    {
      provide: APP_FILTER,
      useFactory: ({ httpAdapter }: HttpAdapterHost) => {
        return new PrismaClientExceptionFilter(httpAdapter)
      },
      inject: [HttpAdapterHost],
    },

    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
