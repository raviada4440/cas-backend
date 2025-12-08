import { compareSync, hashSync } from 'bcrypt'

import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable, UnprocessableEntityException } from '@nestjs/common'

import { UserRegisterInput } from './dtos/register.dto'
import { USER_IMMUTABLE_KEYS } from './user.protect'

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async register(userInput: UserRegisterInput) {
    const isExist = await this.db.prisma.user.findUnique({
      where: {
        email: userInput.email,
      },
      select: {
        id: true,
      },
    })

    if (isExist) {
      throw new BizException(ErrorCodeEnum.UserExist)
    }

    const model = await this.db.prisma.user.create({
      data: {
        email: userInput.email,
        password: hashSync(userInput.password, 10),
        name: userInput.name ?? null,
        image: userInput.image ?? null,
      },
    })

    return model
  }

  /**
   * 修改密码
   *
   * @async
   * @param {string} id - 用户 id
   * @param {Partial} data - 部分修改数据
   */
  async patchUserData(
    id: string,
    data: Partial<Record<string, unknown>> & { password?: string },
  ): Promise<void> {
    const { password } = data

    const protectedKeys = new Set([...USER_IMMUTABLE_KEYS, 'password'])
    for (const key of protectedKeys) {
      if (key in data) {
        delete data[key]
      }
    }

    const doc: Record<string, unknown> = { ...data }
    if (password !== undefined) {
      const currentUser = await this.db.prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          password: true,
        },
      })

      if (!currentUser) {
        throw new BizException(ErrorCodeEnum.UserNotFound)
      }
      // 1. 验证新旧密码是否一致
      if (currentUser.password && compareSync(password, currentUser.password)) {
        throw new UnprocessableEntityException('密码可不能和原来的一样哦')
      }
      doc.password = hashSync(password, 10)
    }

    await this.db.prisma.user.update({
      where: {
        id,
      },
      data: doc as Prisma.UserUpdateInput,
    })
  }

  getOwner(userId: string) {
    return this.db.prisma.user
      .findUniqueOrThrow({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
          createdAt: true,
          updatedAt: true,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.UserNotFound)))
  }
}
