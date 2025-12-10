import fastifyCors from '@fastify/cors'
import { Logger } from 'nestjs-pretty-logger'
import { chalk } from 'zx-cjs'

import { NestFactory } from '@nestjs/core'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger as NestLogger } from '@nestjs/common'

import { API_VERSION, CROSS_DOMAIN, PORT } from './app.config'
import { AppModule } from './app.module'
import { fastifyApp } from './common/adapter/fastify.adapter'
import { SpiderGuard } from './common/guards/spider.guard'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { consola } from './global/consola.global'
import { isDev } from './shared/utils/environment.util'

// const APIVersion = 1
const ALLOWED_ORIGIN_PATTERNS = CROSS_DOMAIN.allowedOrigins.map((host) => new RegExp(host, 'i'))
const ALLOW_METHODS = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
const ALLOW_HEADERS = [
  'Authorization',
  'Content-Type',
  'Accept',
  'Origin',
  'X-Requested-With',
  'Accept-Language',
]

function isOriginAllowed(origin: string): boolean {
  const candidates: string[] = []
  candidates.push(origin)

  try {
    const url = new URL(origin)
    if (url.host) candidates.push(url.host)
    if (url.hostname) candidates.push(url.hostname)
  } catch {
    // Origin might already be a host or hostname without protocol (e.g. set by proxy hook)
  }

  return candidates.some((candidate) =>
    ALLOWED_ORIGIN_PATTERNS.some((pattern) => pattern.test(candidate)),
  )
}

declare const module: any

export async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyApp, {
    logger: ['error', 'warn', 'log', 'debug'],
  })
  const bootstrapLogger = new NestLogger(bootstrap.name)
  bootstrapLogger.log('Bootstrap: Nest application created', bootstrap.name)

  const fastifyInstance = app.getHttpAdapter().getInstance()

  await fastifyInstance.register(fastifyCors as any, {
    hook: 'preHandler',
    credentials: true,
    methods: ALLOW_METHODS,
    allowedHeaders: ALLOW_HEADERS,
    exposedHeaders: ['Content-Disposition'],
    maxAge: 3600,
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, value: boolean | string) => void,
    ) => {
      if (!origin) {
        callback(null, true)
        return
      }

      if (isDev) {
        callback(null, origin)
        return
      }

      if (isOriginAllowed(origin)) {
        callback(null, origin)
        return
      }

      callback(null, false)
    },
  })

  fastifyInstance.addHook('onRequest', (request, reply, done) => {
    if (isDev) {
      done()
      return
    }

    const origin = request.headers['origin']
    if (!origin || isOriginAllowed(origin)) {
      done()
      return
    }

    const accessControlMethod = request.headers['access-control-request-method']
    const accessControlHeaderPart = accessControlMethod
      ? ` (access-control-request-method=${String(accessControlMethod)})`
      : ''

    const referer = request.headers['referer']
    const userAgent = request.headers['user-agent']

    consola.warn(
      `[CORS] Blocked origin: ${origin} → ${request.method} ${
        request.url
      }${accessControlHeaderPart}${referer ? ` referer=${referer}` : ''}${
        userAgent ? ` ua=${userAgent}` : ''
      }`,
    )
    reply.status(403).send({
      error: 'CORS origin not allowed',
      origin,
      path: request.url,
    })
  })

  isDev && app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalGuards(new SpiderGuard())

  const enableSwagger = isDev || String(process.env.ENABLE_SWAGGER).toLowerCase() === 'true'

  if (enableSwagger) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Casandra Backend API')
      .setDescription('API documentation for the Casandra Backend')
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
