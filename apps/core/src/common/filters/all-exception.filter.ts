import fs, { WriteStream } from 'fs'
import { resolve } from 'path'
import { FastifyReply, FastifyRequest } from 'fastify'
import { chalk } from 'zx-cjs'

import { HTTP_REQUEST_TIME } from '@core/constants/meta.constant'
import { LOG_DIR } from '@core/constants/path.constant'
import { REFLECTOR } from '@core/constants/system.constant'
import { isDev, isTest } from '@core/global/env.global'
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { I18nService } from 'nestjs-i18n'

import { getIp } from '../../shared/utils/ip.util'
import { LoggingInterceptor } from '../interceptors/logging.interceptor'

type myError = {
  readonly status: number
  readonly statusCode?: number

  readonly message?: string
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)
  private errorLogPipe?: WriteStream
  constructor(
    @Inject(REFLECTOR) private reflector: Reflector,
    private readonly i18n: I18nService,
  ) {}

  async catch(exception: unknown, host: ArgumentsHost): Promise<void> {
    try {
      await this.handleException(exception, host)
    } catch (error) {
      Logger.error(
        `Unhandled error while processing exception: ${(error as Error).message}`,
        (error as Error).stack,
        AllExceptionsFilter.name,
      )
    }
  }

  private async handleException(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<FastifyReply>()
    const request = ctx.getRequest<FastifyRequest>()

    if (request.method === 'OPTIONS') {
      return response.status(HttpStatus.OK).send()
    }

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : (exception as myError)?.status ||
          (exception as myError)?.statusCode ||
          HttpStatus.INTERNAL_SERVER_ERROR

    const responsePayload =
      exception instanceof HttpException
        ? exception.getResponse()
        : (exception as any)?.response ?? {}
    const normalizedBody =
      typeof responsePayload === 'object' && responsePayload !== null
        ? (responsePayload as Record<string, unknown>)
        : {}

    const messageKey =
      typeof normalizedBody.messageKey === 'string'
        ? (normalizedBody.messageKey as string)
        : undefined

    let rawMessage = ''
    if (typeof normalizedBody.message === 'string') {
      rawMessage = normalizedBody.message as string
    } else if (!messageKey && typeof (exception as myError)?.message === 'string') {
      rawMessage = (exception as myError).message as string
    }

    const url = request.raw.url!
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      Logger.error(exception, undefined, 'Catch')
      console.error(exception)

      if (!isDev) {
        this.errorLogPipe =
          this.errorLogPipe ??
          fs.createWriteStream(resolve(LOG_DIR, 'error.log'), {
            flags: 'a+',
            encoding: 'utf-8',
          })

        this.errorLogPipe.write(
          `[${new Date().toISOString()}] ${decodeURI(url)}: ${
            (exception as any)?.response?.message || (exception as myError)?.message
          }\n${(exception as Error).stack}\n`,
        )
      }
    } else {
      const ip = getIp(request)
      const logMessage = `IP: ${ip} Error Info: (${status}) ${rawMessage} Path: ${decodeURI(url)}`
      if (isTest) console.log(logMessage)
      this.logger.warn(logMessage)
    }
    // @ts-ignore
    const prevRequestTs = this.reflector.get(HTTP_REQUEST_TIME, request as any)

    if (prevRequestTs) {
      const content = `${request.method} -> ${request.url}`
      Logger.debug(
        `--- ResponseError：${content}${chalk.yellow(` +${+new Date() - prevRequestTs}ms`)}`,
        LoggingInterceptor.name,
      )
    }
    const headerLangRaw =
      (request.headers['accept-language'] as string | undefined) ??
      (request.headers['Accept-Language'] as string | undefined)
    const headerLang = headerLangRaw
      ? headerLangRaw.split(',')[0]?.split(';')[0]?.trim() || headerLangRaw
      : undefined

    const langHints: string[] = []
    const requestLang = (request as any)?.i18nLang
    if (typeof requestLang === 'string' && requestLang.length > 0) {
      langHints.push(requestLang)
    }
    if (headerLang) {
      langHints.push(headerLang)
      if (headerLang.includes('-')) {
        langHints.push(headerLang.split('-')[0])
      }
    }
    const langCandidates = Array.from(new Set(langHints))

    let localizedMessage: string = rawMessage
    const translationTarget = messageKey || rawMessage

    if (typeof translationTarget === 'string' && translationTarget.length > 0) {
      let translated = false
      const candidates = langCandidates.length > 0 ? langCandidates : [undefined]

      for (const candidate of candidates) {
        this.logger.debug(
          `Attempting to translate key: "${translationTarget}" (lang: ${candidate ?? 'default'})`,
        )
        try {
          localizedMessage = (await this.i18n.translate(translationTarget, {
            lang: candidate,
            defaultValue: rawMessage || translationTarget,
          })) as string
          if (localizedMessage !== rawMessage) {
            translated = true
            break
          }
        } catch (error) {
          this.logger.warn(
            `Failed to translate message key "${translationTarget}" for lang "${
              candidate ?? 'default'
            }". Reason: ${(error as Error).message}`,
          )
        }
      }

      if (!translated) {
        localizedMessage = rawMessage || translationTarget
      }
    }

    if (messageKey && localizedMessage === rawMessage) {
      this.logger.warn(
        `Translation lookup for key "${messageKey}" returned "${rawMessage}". Candidates tried: ${
          langCandidates.length > 0 ? langCandidates.join(', ') : 'default'
        }. Headers: ${JSON.stringify(request.headers)}`,
      )
    }

    if (!localizedMessage) {
      localizedMessage = (await this.i18n.translate('errors.unknown', {
        lang: langCandidates[0],
        defaultValue: 'Unknown error',
      })) as string
    }

    response
      .status(status)
      .type('application/json')
      .send({
        ok: 0,
        code:
          typeof normalizedBody?.code === 'number'
            ? (normalizedBody.code as number)
            : typeof normalizedBody?.code === 'string'
              ? Number(normalizedBody.code)
              : status,
        message: localizedMessage,
      })
  }
}
