import { AllExceptionsFilter } from '@core/common/filters/all-exception.filter'
import { HttpException, ArgumentsHost } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { I18nService } from 'nestjs-i18n'
import { describe, expect, it, vi } from 'vitest'

describe('AllExceptionsFilter', () => {
  it('translates messageKey responses using i18n service', async () => {
    const translate = vi.fn().mockResolvedValue('localized user not found')
    const mockI18n = { translate } as unknown as I18nService
    const filter = new AllExceptionsFilter(new Reflector(), mockI18n)

    const send = vi.fn()
    const type = vi.fn().mockReturnValue({ send })
    const status = vi.fn().mockReturnValue({ type })
    const response = { status }

    const request = {
      method: 'POST',
      headers: {
        'accept-language': 'en-US,en;q=0.9',
      },
      raw: {
        url: '/api/v1/auth/login',
        connection: { remoteAddress: '127.0.0.1' },
        socket: {},
      },
    } as any

    const httpHost = {
      switchToHttp: () => ({
        getResponse: () => response,
        getRequest: () => request,
      }),
    } as ArgumentsHost

    const exception = new HttpException(
      {
        code: 30000,
        messageKey: 'errors.user_not_found',
      },
      404,
    )

    await filter.catch(exception, httpHost)

    expect(status).toHaveBeenCalledWith(404)
    expect(type).toHaveBeenCalledWith('application/json')
    expect(translate).toHaveBeenCalledWith('errors.user_not_found', {
      lang: 'en-US',
      defaultValue: 'errors.user_not_found',
    })
    expect(send).toHaveBeenCalledWith({
      ok: 0,
      code: 30000,
      message: 'localized user not found',
    })
  })
})
