import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable } from '@nestjs/common'

import { Prisma } from '@db/client'
import {
  CreateIcdInput,
  IcdDetail,
  IcdSearchQuery,
  IcdSearchResponse,
  IcdSummary,
  UpdateIcdInput,
} from './icd.dto'
import { IcdDetailSelect, IcdSummarySelect } from './icd.protect'

@Injectable()
export class IcdService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: IcdSearchQuery): Promise<IcdSearchResponse> {
    const { search, limit, cursor } = query
    const take = Math.min(Math.max(limit, 1), 50)
    const where =
      search && search.trim().length > 0
        ? {
            OR: [
              { code: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { shortDescription: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { alias1: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { alias2: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { alias3: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { alias4: { contains: search, mode: Prisma.QueryMode.insensitive } },
            ],
          }
        : undefined

    const records = await this.db.prisma.icd.findMany({
      where,
      take: take + 1,
      orderBy: { createdAt: 'desc' },
      select: IcdSummarySelect,
      ...(cursor
        ? {
            cursor: { id: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = records.length > take
    const trimmed = hasNext ? records.slice(0, take) : records

    return {
      items: trimmed.map(this.mapToSummary),
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.id ?? null : null,
    }
  }

  async get(icdId: string): Promise<IcdDetail> {
    const record = await this.db.prisma.icd
      .findUniqueOrThrow({
        where: { id: icdId },
        select: IcdDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.IcdNotFound)))

    return this.mapToDetail(record)
  }

  async create(input: CreateIcdInput): Promise<IcdDetail> {
    const record = await this.db.prisma.icd.create({
      data: this.prepareMutationData(input),
      select: IcdDetailSelect,
    })
    return this.mapToDetail(record)
  }

  async update(icdId: string, input: UpdateIcdInput): Promise<IcdDetail> {
    const record = await this.db.prisma.icd
      .update({
        where: { id: icdId },
        data: this.prepareMutationData(input),
        select: IcdDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.IcdNotFound)))

    return this.mapToDetail(record)
  }

  async delete(icdId: string): Promise<{ success: boolean }> {
    await this.db.prisma.icd
      .delete({
        where: { id: icdId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.IcdNotFound)))

    return { success: true }
  }

  private prepareMutationData(input: CreateIcdInput | UpdateIcdInput) {
    return Object.fromEntries(
      Object.entries({
        code: input.code,
        shortDescription: input.shortDescription ?? null,
        alias1: input.alias1 ?? null,
        alias2: input.alias2 ?? null,
        alias3: input.alias3 ?? null,
        alias4: input.alias4 ?? null,
      }).filter(([, value]) => value !== undefined),
    )
  }

  private mapToSummary(record: {
    id: string
    code: string | null
    shortDescription: string | null
  }): IcdSummary {
    return {
      id: record.id,
      code: record.code ?? null,
      shortDescription: record.shortDescription ?? null,
    }
  }

  private mapToDetail(record: {
    id: string
    code: string | null
    shortDescription: string | null
    alias1: string | null
    alias2: string | null
    alias3: string | null
    alias4: string | null
    createdAt: Date
    updatedAt: Date
  }): IcdDetail {
    return {
      id: record.id,
      code: record.code ?? null,
      shortDescription: record.shortDescription ?? null,
      alias1: record.alias1 ?? null,
      alias2: record.alias2 ?? null,
      alias3: record.alias3 ?? null,
      alias4: record.alias4 ?? null,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    }
  }
}
