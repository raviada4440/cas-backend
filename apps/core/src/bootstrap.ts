import { Logger } from 'nestjs-pretty-logger'
import { chalk } from 'zx-cjs'

import { NestFactory } from '@nestjs/core'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { API_VERSION, CROSS_DOMAIN, PORT } from './app.config'
import { AppModule } from './app.module'
import { fastifyApp } from './common/adapter/fastify.adapter'
import { SpiderGuard } from './common/guards/spider.guard'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { consola } from './global/consola.global'
import { isDev } from './shared/utils/environment.util'

// const APIVersion = 1
const Origin = CROSS_DOMAIN.allowedOrigins

declare const module: any

export async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyApp, {
    logger: ['error', 'debug'],
  })

  const hosts = Origin.map((host) => new RegExp(host, 'i'))

  app.enableCors({
    origin: (origin, callback) => {
      const allow = !origin || hosts.some((host) => host.test(origin))

      callback(null, allow)
    },
    credentials: true,
  })

  isDev && app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalGuards(new SpiderGuard())

  const enableSwagger = isDev || String(process.env.ENABLE_SWAGGER).toLowerCase() === 'true'

  if (enableSwagger) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Nest HTTP Prisma Zod API')
      .setDescription('API documentation for the Nest HTTP template')
      .setVersion(API_VERSION.toString())
      .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      })
      .build()

    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    })
  }

  await app.listen(+PORT, '0.0.0.0', async () => {
    app.useLogger(app.get(Logger))
    consola.info('ENV:', process.env.NODE_ENV)
    const url = await app.getUrl()
    const pid = process.pid

    const prefix = 'P'

    consola.success(`[${prefix + pid}] Server listen on: ${url}`)

    consola.info(`Server is up. ${chalk.yellow(`+${performance.now() | 0}ms`)}`)
  })
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
