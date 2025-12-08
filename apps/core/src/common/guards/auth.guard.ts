import { AuthService } from '@core/modules/auth/auth.service'
import { UserService } from '@core/modules/user/user.service'
import { extractAuthSessionCookie } from '@core/common/utils/cookie.util'
import { getNestExecutionContextRequest } from '@core/transformers/get-req.transformer'
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'

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

    @Inject(UserService) private readonly userService: UserService,
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
        return true
      }
    }

    const Authorization: string = headers.authorization || headers.Authorization || query.token

    if (!Authorization) {
      throw new UnauthorizedException('未登录')
    }

    if (this.authService.isCustomToken(Authorization)) {
      const customTokenUserId = await this.authService.verifyCustomToken(Authorization)
      if (!customTokenUserId) {
        throw new UnauthorizedException('令牌无效')
      }
      const owner = await this.userService.getOwner(customTokenUserId)
      request.owner = owner
      request.token = Authorization
      return true
    }

    const jwt = Authorization.replace(/[Bb]earer /, '')

    if (!isJWT(jwt)) {
      throw new UnauthorizedException('令牌无效')
    }
    const payload = await this.authService.jwtServicePublic.verify(jwt)
    if (!payload || typeof payload.id !== 'string') {
      throw new UnauthorizedException('身份过期')
    }

    const owner = await this.userService.getOwner(payload.id as string)
    request.owner = owner
    request.token = jwt
    return true
  }

  protected getRequest(
    context: ExecutionContext,
  ): ReturnType<typeof getNestExecutionContextRequest> {
    return getNestExecutionContextRequest(context)
  }
}
