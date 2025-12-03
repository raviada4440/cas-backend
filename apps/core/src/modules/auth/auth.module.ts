import { Global, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { DatabaseModule } from '@core/processors/database/database.module'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { SystemTokenService } from './system-token.service'
import { UserOnboardingService } from './user-onboarding.service'

@Module({
  imports: [PassportModule, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, SystemTokenService, UserOnboardingService],
  exports: [AuthService, SystemTokenService, UserOnboardingService],
})
@Global()
export class AuthModule {}
