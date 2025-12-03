import { randomBytes } from 'crypto'

import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { hash } from 'bcrypt'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  InviteUserRequest,
  InviteUserResponse,
  ResendVerificationRequest,
  SetPasswordRequest,
  SetPasswordResponse,
  VerificationStatus,
  VerifyEmailRequest,
} from '@shared/contracts/auth'
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

@Injectable()
export class UserOnboardingService {
  constructor(private readonly database: DatabaseService) {}

  public async inviteUser(input: InviteUserRequest): Promise<InviteUserResponse> {
    const existing = await this.database.prisma.user.findUnique({
      where: { email: input.email },
      select: { id: true },
    })

    if (existing) {
      throw new ConflictException('User already exists')
    }

    const user = await this.database.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        emailVerified: null,
      },
    })

    if (input.userType) {
      await this.database.prisma.userAttribute.create({
        data: {
          userId: user.id,
          userType: input.userType,
        },
      })
    }

    const { token, expires } = await this.createVerificationToken(user.id)

    const userAttribute = await this.database.prisma.userAttribute.findUnique({
      where: { userId: user.id },
      select: {
        userType: true,
      },
    })

    return {
      user: {
        id: user.id,
        name: user.name ?? null,
        email: user.email ?? '',
        emailVerified: user.emailVerified ? user.emailVerified.toISOString() : null,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
        userType: userAttribute?.userType ?? null,
      },
      verificationToken: token,
      expiresAt: expires.toISOString(),
    }
  }

  public async resendVerification(input: ResendVerificationRequest): Promise<VerificationStatus> {
    const user = await this.database.prisma.user.findUnique({
      where: { email: input.email },
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    if (user.emailVerified && user.password) {
      return {
        success: false,
        reason: 'User already verified and password set',
      }
    }

    const { token, expires } = await this.createVerificationToken(user.id)

    return {
      success: true,
      token,
      expiresAt: expires.toISOString(),
    }
  }

  public async verifyEmail(input: VerifyEmailRequest): Promise<VerificationStatus> {
    const verificationToken = await this.database.prisma.verificationToken.findUnique({
      where: { token: input.token },
    })

    if (!verificationToken) {
      return {
        success: false,
        reason: 'Verification token not found',
      }
    }

    if (verificationToken.expires < new Date()) {
      await this.database.prisma.verificationToken.delete({
        where: { token: input.token },
      })
      return {
        success: false,
        reason: 'Verification token expired',
      }
    }

    const user = await this.database.prisma.user.findUnique({
      where: { id: verificationToken.identifier },
    })

    if (!user) {
      return {
        success: false,
        reason: 'User not found',
      }
    }

    if (user.emailVerified && user.password) {
      return {
        success: false,
        reason: 'User already verified',
      }
    }

    return {
      success: true,
    }
  }

  public async setPassword(input: SetPasswordRequest): Promise<SetPasswordResponse> {
    const verificationToken = await this.database.prisma.verificationToken.findUnique({
      where: { token: input.token },
    })

    if (!verificationToken) {
      throw new NotFoundException('Invalid or expired setup link')
    }

    if (verificationToken.expires < new Date()) {
      await this.database.prisma.verificationToken.delete({
        where: { token: input.token },
      })
      throw new BadRequestException('Setup link has expired. Please request a new email.')
    }

    const hashedPassword = await hash(input.password, 10)

    const updatedUser = await this.database.prisma.user.update({
      where: { id: verificationToken.identifier },
      data: {
        password: hashedPassword,
        emailVerified: new Date(),
      },
      select: {
        id: true,
      },
    })

    await this.database.prisma.verificationToken.delete({
      where: { token: input.token },
    })

    return {
      success: true,
      userId: updatedUser.id,
    }
  }

  private async createVerificationToken(userId: string) {
    await this.database.prisma.verificationToken.deleteMany({
      where: { identifier: userId },
    })

    const token = randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + TOKEN_TTL_MS)

    await this.database.prisma.verificationToken.create({
      data: {
        identifier: userId,
        token,
        expires,
      },
    })

    return { token, expires }
  }
}
