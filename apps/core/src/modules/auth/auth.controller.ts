import { Body, Get, HttpCode, HttpStatus, Post, Query, Req } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ZodValidationPipe } from '@core/common/pipes/zod-validation.pipe'

import {
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
} from './auth.dto'
import { AuthService } from './auth.service'
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
} from '@shared/contracts/auth'

type RequestWithOwner = FastifyRequest & {
  owner?: {
    id?: string
  }
}

@ApiTags('Auth')
@ApiController('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly systemTokenService: SystemTokenService,
    private readonly onboardingService: UserOnboardingService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Authenticate using email and password' })
  @ApiOkResponse({ type: LoginResponseDto })
  @ApiBody({ type: LoginRequestDto })
  async login(@Body(new ZodValidationPipe(LoginRequestSchema)) body: LoginRequest) {
    const user = await this.authService.validateEmailAndPassword(body.email, body.password)
    const token = await this.authService.signToken(user.id)

    const { password: _password, ...sanitized } = user

    const normalizedUser = {
      ...sanitized,
      createdAt: sanitized.createdAt.toISOString(),
      updatedAt: sanitized.updatedAt.toISOString(),
    }

    return {
      ...normalizedUser,
      token,
      accessToken: token,
      user: normalizedUser,
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
}
