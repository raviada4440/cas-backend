import { compareSync } from 'bcrypt'
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

  isCustomToken(token: string) {
    return token.startsWith('txo') && token.length - 3 === 40
  }

  async verifyCustomToken(token: string) {
    // API tokens are not modeled in the current schema; treat all custom tokens as invalid.
    return false
  }
}
