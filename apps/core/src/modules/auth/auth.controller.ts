import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Req,
  UnauthorizedException,
} from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'
import { I18nService } from 'nestjs-i18n'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { HTTPDecorators } from '@core/common/decorators/http.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ZodValidationPipe } from '@core/common/pipes/zod-validation.pipe'
import { JWTService } from '@core/processors/helper/helper.jwt.service'
import { extractAuthSessionCookie } from '@core/common/utils/cookie.util'

import {
  AccessTokenResponseDto,
  LoginRequestDto,
  InviteUserRequestDto,
  InviteUserResponseDto,
  LoginResponseDto,
  ResendVerificationRequestDto,
  SetPasswordRequestDto,
  SetPasswordResponseDto,
  SystemTokenConfigResponseDto,
  SystemTokenQuery,
  SystemTokenQuerySchema,
  SystemTokenRequestDto,
  SystemTokenResponseDto,
  VerificationStatusDto,
  VerifyEmailRequestDto,
  LinkExternalIdentityResponseDto,
} from './auth.dto'
import { AccountLinkingService } from './account-linking.service'
import { AuthService, TenantMembership } from './auth.service'
import { SystemTokenService } from './system-token.service'
import { UserOnboardingService } from './user-onboarding.service'
import {
  InviteUserRequest,
  LoginRequest,
  LoginRequestSchema,
  ResendVerificationRequest,
  SetPasswordRequest,
  SetPasswordRequestSchema,
  SystemTokenRequest,
  SystemTokenRequestSchema,
  VerifyEmailRequest,
  LinkExternalIdentityRequest,
  LinkExternalIdentityRequestSchema,
} from '@shared/contracts/auth'

type RequestWithOwner = FastifyRequest & {
  owner?: {
    id?: string
  }
  token?: string
  i18nLang?: string
  tenants?: TenantMembership[]
  tenant?: TenantMembership | null
  tenantIds?: string[]
  isSuperAdmin?: boolean
}

@ApiTags('Auth')
@ApiController('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly systemTokenService: SystemTokenService,
    private readonly onboardingService: UserOnboardingService,
    private readonly accountLinkingService: AccountLinkingService,
    private readonly i18n: I18nService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @HTTPDecorators.Bypass
  @ApiOperation({ summary: 'Authenticate using email and password' })
  @ApiOkResponse({ type: LoginResponseDto })
  @ApiBody({ type: LoginRequestDto })
  async login(@Body(new ZodValidationPipe(LoginRequestSchema)) body: LoginRequest) {
    const user = await this.authService.validateEmailAndPassword(body.email, body.password)
    const context = await this.authService.getUserContext(user.id)
    if (!context) {
      throw new UnauthorizedException(await this.i18n.translate('errors.not_authenticated'))
    }

    const tenantScopes = context.tenants.map((tenant) => ({
      type: tenant.tenantType ?? 'organization',
      id: tenant.id,
    }))
    const tenantIds = tenantScopes.filter((scope) => scope.type === 'organization').map((t) => t.id)
    const token = await this.authService.signToken(user.id, {
      tenantIds,
      tenantScopes,
      isSuperAdmin: context.isSuperAdmin,
    })

    const normalizedUser = {
      id: context.user.id,
      email: context.user.email,
      name: context.user.name,
      image: context.user.image,
      createdAt: context.user.createdAt.toISOString(),
      updatedAt: context.user.updatedAt.toISOString(),
    }

    return {
      token,
      accessToken: token,
      user: normalizedUser,
      tenants: context.tenants,
      isSuperAdmin: context.isSuperAdmin,
    }
  }

  @Post('system-token')
  @Auth()
  @ApiOperation({ summary: 'Generate a system token for backend FHIR operations' })
  @ApiOkResponse({ type: SystemTokenResponseDto })
  @ApiBody({ type: SystemTokenRequestDto })
  async createSystemToken(
    @Req() request: RequestWithOwner,
    @Body(new ZodValidationPipe(SystemTokenRequestSchema)) body: SystemTokenRequest,
  ) {
    const userId = request.owner?.id ?? 'unknown'
    const token = await this.systemTokenService.generateSystemToken(body, userId)
    return token
  }

  @Post('identities/link')
  @HttpCode(HttpStatus.OK)
  @HTTPDecorators.Bypass
  @ApiOperation({ summary: 'Link or create a user from external identity' })
  @ApiOkResponse({ type: LinkExternalIdentityResponseDto })
  async linkExternalIdentity(
    @Body(new ZodValidationPipe(LinkExternalIdentityRequestSchema))
    body: LinkExternalIdentityRequest,
  ) {
    const userId = await this.accountLinkingService.linkOrCreateUser({
      provider: body.provider,
      issuer: body.issuer,
      subject: body.subject,
      email: body.email ?? null,
      name: body.name ?? null,
      image: body.image ?? null,
      fhirUser: body.fhirUser ?? null,
      orgId: body.orgId ?? null,
    })

    return { userId }
  }

  @Post('access-token')
  @Auth()
  @ApiOperation({ summary: 'Issue a bearer token for API integrations' })
  @ApiOkResponse({ type: AccessTokenResponseDto })
  async issueAccessToken(@Req() request: RequestWithOwner) {
    const userId = request.owner?.id
    if (!userId) {
      throw new UnauthorizedException(
        await this.i18n.translate('errors.not_authenticated', {
          lang: request.i18nLang,
        }),
      )
    }
    const context = request.tenants ? null : await this.authService.getUserContext(userId)
    const tenants = request.tenants ?? context?.tenants ?? []
    const isSuperAdmin = request.isSuperAdmin ?? context?.isSuperAdmin ?? false
    const tenantScopes = tenants.map((tenant) => ({
      type: tenant.tenantType ?? 'organization',
      id: tenant.id,
    }))
    const tenantIds = tenantScopes.filter((scope) => scope.type === 'organization').map((t) => t.id)
    const token = await this.authService.signToken(userId, {
      tenantIds,
      tenantScopes,
      isSuperAdmin,
    })
    const expiresAt = new Date(
      Date.now() + JWTService.expiresDay * 24 * 60 * 60 * 1000,
    ).toISOString()
    request.tenants = tenants
    request.tenant = tenants[0] ?? null
    request.tenantIds = tenantIds
    request.isSuperAdmin = isSuperAdmin
    return {
      token,
      expiresAt,
      tenants,
      isSuperAdmin,
    }
  }

  @Get('system-token')
  @Auth()
  @ApiOperation({ summary: 'Get system token configuration for an organization' })
  @ApiOkResponse({ type: SystemTokenConfigResponseDto })
  async getSystemTokenConfig(
    @Query(new ZodValidationPipe(SystemTokenQuerySchema)) query: SystemTokenQuery,
  ) {
    const config = await this.systemTokenService.getSystemTokenConfig(query.org)
    return config
  }

  @Post('users/invite')
  @Auth()
  @ApiOperation({ summary: 'Invite a new user and issue a verification token' })
  @ApiOkResponse({ type: InviteUserResponseDto })
  @ApiBody({ type: InviteUserRequestDto })
  async inviteUser(
    @Body(new ZodValidationPipe(InviteUserRequestDto.schema)) body: InviteUserRequest,
  ) {
    return this.onboardingService.inviteUser(body)
  }

  @Post('users/resend-verification')
  @Auth()
  @ApiOperation({ summary: 'Resend a verification email to a user' })
  @ApiOkResponse({ type: VerificationStatusDto })
  @ApiBody({ type: ResendVerificationRequestDto })
  async resendVerification(
    @Body(new ZodValidationPipe(ResendVerificationRequestDto.schema))
    body: ResendVerificationRequest,
  ) {
    return this.onboardingService.resendVerification(body)
  }

  @Post('users/verify-email')
  @ApiOperation({ summary: 'Verify a user email via verification token' })
  @ApiOkResponse({ type: VerificationStatusDto })
  @ApiBody({ type: VerifyEmailRequestDto })
  async verifyEmail(
    @Body(new ZodValidationPipe(VerifyEmailRequestDto.schema)) body: VerifyEmailRequest,
  ) {
    return this.onboardingService.verifyEmail(body)
  }

  @Post('users/set-password')
  @ApiOperation({ summary: 'Complete onboarding by setting the account password' })
  @ApiOkResponse({ type: SetPasswordResponseDto })
  @ApiBody({ type: SetPasswordRequestDto })
  async setPassword(
    @Body(new ZodValidationPipe(SetPasswordRequestSchema)) body: SetPasswordRequest,
  ) {
    return this.onboardingService.setPassword(body)
  }

  @Delete('session')
  @Auth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Invalidate the active session or bearer token' })
  async deleteSession(@Req() request: RequestWithOwner) {
    const cookieHeader = request.headers['cookie'] as string | undefined
    const sessionToken = extractAuthSessionCookie(cookieHeader)
    if (sessionToken) {
      await this.authService.removeSessionToken(sessionToken)
    }

    const requestToken = request.token
    if (requestToken && requestToken !== sessionToken) {
      await this.authService.jwtServicePublic.revokeToken(requestToken)
    }

    // No body or additional handling needed; returning 204 is sufficient.
  }
}
