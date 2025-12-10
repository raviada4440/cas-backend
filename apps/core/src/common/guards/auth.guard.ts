import { AuthService } from '@core/modules/auth/auth.service'
import { extractAuthSessionCookie } from '@core/common/utils/cookie.util'
import { getNestExecutionContextRequest } from '@core/transformers/get-req.transformer'
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { I18nService } from 'nestjs-i18n'

function isJWT(token: string): boolean {
  const parts = token.split('.')
  return (
    parts.length === 3 &&
    /^[a-zA-Z0-9_-]+$/.test(parts[0]) &&
    /^[a-zA-Z0-9_-]+$/.test(parts[1]) &&
    /^[a-zA-Z0-9_-]+$/.test(parts[2])
  )
}

/**
 * JWT auth guard
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly authService: AuthService,
    private readonly i18n: I18nService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context)

    const query = request.query as any
    const headers = request.headers

    const cookieSessionToken = extractAuthSessionCookie(headers?.cookie)
    if (cookieSessionToken) {
      const sessionResult = await this.authService.validateSessionToken(cookieSessionToken)
      if (sessionResult) {
        request.owner = sessionResult.user
        request.token = cookieSessionToken
        request.tenants = sessionResult.tenants
        request.tenant = sessionResult.tenants[0] ?? null
        request.tenantIds = sessionResult.tenants.map((tenant) => tenant.id)
        request.isSuperAdmin = sessionResult.isSuperAdmin
        return true
      }
    }

    const Authorization: string = headers.authorization || headers.Authorization || query.token

    if (!Authorization) {
      throw new UnauthorizedException(await this.translate(request, 'not_authenticated'))
    }

    if (this.authService.isCustomToken(Authorization)) {
      const customTokenUserId = await this.authService.verifyCustomToken(Authorization)
      if (!customTokenUserId) {
        throw new UnauthorizedException(await this.translate(request, 'invalid_token'))
      }
      const contextData = await this.authService.getUserContext(customTokenUserId)
      if (!contextData) {
        throw new UnauthorizedException(await this.translate(request, 'invalid_token'))
      }
      request.owner = contextData.user
      request.token = Authorization
      request.tenants = contextData.tenants
      request.tenant = contextData.tenants[0] ?? null
      request.tenantIds = contextData.tenants.map((tenant) => tenant.id)
      request.isSuperAdmin = contextData.isSuperAdmin
      return true
    }

    const jwt = Authorization.replace(/[Bb]earer /, '')

    if (!isJWT(jwt)) {
      throw new UnauthorizedException(await this.translate(request, 'invalid_token'))
    }
    const payload = await this.authService.jwtServicePublic.verify(jwt)
    if (!payload || typeof payload.id !== 'string') {
      throw new UnauthorizedException(await this.translate(request, 'session_expired'))
    }

    const contextData = await this.authService.getUserContext(payload.id as string)
    if (!contextData) {
      throw new UnauthorizedException(await this.translate(request, 'session_expired'))
    }

    request.owner = contextData.user
    request.token = jwt
    request.tenants = contextData.tenants
    request.tenant = contextData.tenants[0] ?? null
    request.tenantIds = contextData.tenants.map((tenant) => tenant.id)
    request.isSuperAdmin = contextData.isSuperAdmin
    return true
  }

  protected getRequest(
    context: ExecutionContext,
  ): ReturnType<typeof getNestExecutionContextRequest> {
    return getNestExecutionContextRequest(context)
  }

  private translate(request: any, key: string) {
    return this.i18n.translate<string>(`errors.${key}`, {
      lang: request?.i18nLang,
    })
  }
}
