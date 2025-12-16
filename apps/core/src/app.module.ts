import { LoggerModule } from 'nestjs-pretty-logger'

import { Module, Type } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE, HttpAdapterHost } from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'
import { AcceptLanguageResolver, I18nJsonLoader, I18nModule, QueryResolver } from 'nestjs-i18n'
import { join } from 'path'

import { AppController } from './app.controller'
import { AllExceptionsFilter } from './common/filters/all-exception.filter'
import { PrismaClientExceptionFilter } from './common/filters/prisma-client-exception.filter'
import { HttpCacheInterceptor } from './common/interceptors/cache.interceptor'
import { IdempotenceInterceptor } from './common/interceptors/idempotence.interceptor'
import { ResponseInterceptor } from './common/interceptors/response.interceptor'
import { ZodValidationPipe } from './common/pipes/zod-validation.pipe'
import { AuthModule } from './modules/auth/auth.module'
import { CatalogModule } from './modules/catalog/catalog.module'
import { ConsentsModule } from './modules/consents/consents.module'
import { ReferenceDataModule } from './modules/reference-data/reference-data.module'
import { UserModule } from './modules/user/user.module'
import { OrdersModule } from './modules/orders/orders.module'
import { AdminModule } from './modules/admin/admin.module'
import { SearchModule } from './modules/search/search.module'
import { CacheModule } from './processors/cache/cache.module'
import { DatabaseModule } from './processors/database/database.module'
import { GatewayModule } from './processors/gateway/gateway.module'
import { HelperModule } from './processors/helper/helper.module'
import { EmailModule } from './modules/notifications/email/email.module'
import { ChatModule } from './modules/chat/chat.module'
import { FilesModule } from './modules/files/files.module'
import { AuditModule } from './modules/audit/audit.module'
import { TasksModule } from './modules/tasks/tasks.module'
import { FhirModule } from './modules/fhir/fhir.module'
import { ZohoModule } from './modules/zoho/zoho.module'

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
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loader: I18nJsonLoader,
      loaderOptions: {
        path: join(__dirname, 'i18n'),
        includeSubfolders: true,
        filePattern: '*.json',
        watch: process.env.NODE_ENV !== 'production',
      },
      fallbacks: {
        'en-*': 'en',
        'zh-*': 'zh',
      },
      resolvers: [{ use: QueryResolver, options: ['lang', 'locale'] }, AcceptLanguageResolver],
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
    SearchModule,
    AuditModule,
    ConsentsModule,
    FilesModule,
    TasksModule,
    ChatModule,
    EmailModule,
    FhirModule,
    ZohoModule,
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
