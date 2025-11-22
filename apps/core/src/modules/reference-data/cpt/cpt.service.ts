import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable } from '@nestjs/common'

import { Prisma } from '@db/client'
import {
  CreateCptInput,
  CptDetail,
  CptSearchQuery,
  CptSearchResponse,
  CptSummary,
  UpdateCptInput,
} from './cpt.dto'
import { CptDetailSelect, CptSummarySelect } from './cpt.protect'

@Injectable()
export class CptService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: CptSearchQuery): Promise<CptSearchResponse> {
    const { search, limit, cursor } = query
    const take = Math.min(Math.max(limit, 1), 50)
    const where =
      search && search.trim().length > 0
        ? {
            OR: [
              { code: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { shortDescription: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { longDescription: { contains: search, mode: Prisma.QueryMode.insensitive } },
            ],
          }
        : undefined

    const codes = await this.db.prisma.cptCode.findMany({
      where,
      take: take + 1,
      orderBy: { code: 'asc' },
      select: CptSummarySelect,
      ...(cursor
        ? {
            cursor: { code: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = codes.length > take
    const trimmed = hasNext ? codes.slice(0, take) : codes

    return {
      items: trimmed.map(this.mapToSummary),
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.code ?? null : null,
    }
  }

  async get(code: string): Promise<CptDetail> {
    const record = await this.db.prisma.cptCode
      .findUniqueOrThrow({
        where: { code },
        select: CptDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.CptNotFound)))

    return this.mapToDetail(record)
  }

  async create(input: CreateCptInput): Promise<CptDetail> {
    const record = await this.db.prisma.cptCode.create({
      data: {
        code: input.code,
        shortDescription: input.shortDescription ?? null,
        longDescription: input.longDescription ?? null,
      },
      select: CptDetailSelect,
    })

    return this.mapToDetail(record)
  }

  async update(code: string, input: UpdateCptInput): Promise<CptDetail> {
    const record = await this.db.prisma.cptCode
      .update({
        where: { code },
        data: this.prepareUpdateData(input),
        select: CptDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.CptNotFound)))

    return this.mapToDetail(record)
  }

  async delete(code: string): Promise<{ success: boolean }> {
    await this.db.prisma.cptCode
      .delete({
        where: { code },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.CptNotFound)))

    return { success: true }
  }

  private prepareUpdateData(input: UpdateCptInput) {
    return Object.fromEntries(
      Object.entries({
        shortDescription: input.shortDescription ?? null,
        longDescription: input.longDescription ?? null,
      }).filter(([, value]) => value !== undefined),
    )
  }

  private mapToSummary(record: { code: string; shortDescription: string | null }): CptSummary {
    return {
      code: record.code,
      shortDescription: record.shortDescription ?? null,
    }
  }

  private mapToDetail(record: {
    code: string
    shortDescription: string | null
    longDescription: string | null
    createdAt: Date
    updatedAt: Date
  }): CptDetail {
    return {
      code: record.code,
      shortDescription: record.shortDescription ?? null,
      longDescription: record.longDescription ?? null,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    }
  }
}
