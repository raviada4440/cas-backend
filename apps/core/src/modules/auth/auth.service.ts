import { compareSync } from 'bcrypt'
import { createHash } from 'crypto'

import { Session } from '@db/client'
import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { JWTService } from '@core/processors/helper/helper.jwt.service'
import { sleep } from '@core/shared/utils/tool.utils'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly jwtService: JWTService,
  ) {}

  private readonly sessionSecret =
    process.env['AUTH_SECRET'] ||
    process.env['AUTHJS_SECRET'] ||
    process.env['NEXTAUTH_SECRET'] ||
    ''

  get jwtServicePublic() {
    return this.jwtService
  }

  async validateEmailAndPassword(email: string, password: string) {
    const user = await this.db.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user?.password || !compareSync(password, user.password)) {
      await sleep(3000)
      throw new BizException(ErrorCodeEnum.UserNotFound)
    }

    return user
  }

  async signToken(id: string) {
    return this.jwtService.sign(id)
  }

  async validateSessionToken(rawToken: string) {
    const session = await this.findSession(rawToken)
    if (!session) {
      return null
    }
    if (session.expires.getTime() <= Date.now()) {
      return null
    }

    const user = await this.db.prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    if (!user) {
      return null
    }

    return { session, user }
  }

  isCustomToken(token: string) {
    return token.startsWith('txo') && token.length - 3 === 40
  }

  async verifyCustomToken(_token: string): Promise<string | null> {
    // API tokens are not modeled in the current schema; treat all custom tokens as invalid.
    return null
  }

  async removeSessionToken(rawToken: string): Promise<void> {
    const hashed = this.hashSessionToken(rawToken)
    const result = await this.db.prisma.session.deleteMany({
      where: {
        sessionToken: {
          in: [hashed, rawToken],
        },
      },
    })
    if (result.count > 0) {
      console.log(
        `[AuthService] Deleted ${result.count} session row(s) for token hash ${hashed.substring(
          0,
          8,
        )}…`,
      )
    } else {
      console.log(`[AuthService] No session rows matched token hash ${hashed.substring(0, 8)}…`)
    }
  }

  private hashSessionToken(token: string) {
    return createHash('sha256').update(`${token}${this.sessionSecret}`).digest('hex')
  }

  private async findSession(token: string): Promise<Session | null> {
    const hashed = this.hashSessionToken(token)

    const hashedMatch = await this.db.prisma.session.findUnique({
      where: {
        sessionToken: hashed,
      },
    })
    if (hashedMatch) {
      return hashedMatch
    }

    if (hashed !== token) {
      const rawMatch = await this.db.prisma.session.findUnique({
        where: {
          sessionToken: token,
        },
      })
      if (rawMatch) {
        return rawMatch
      }
    }

    return null
  }
}
