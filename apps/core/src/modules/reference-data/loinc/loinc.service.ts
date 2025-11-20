import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable } from '@nestjs/common'

import { Prisma } from '@db/client'
import {
  CreateLoincInput,
  LoincDetail,
  LoincSearchQuery,
  LoincSearchResponse,
  LoincSummary,
  UpdateLoincInput,
} from './loinc.dto'
import { LoincDetailSelect, LoincSummarySelect } from './loinc.protect'

@Injectable()
export class LoincService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: LoincSearchQuery): Promise<LoincSearchResponse> {
    const { search, limit, cursor } = query
    const take = Math.min(Math.max(limit, 1), 50)
    const where =
      search && search.trim().length > 0
        ? {
            OR: [
              { loincNum: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { longCommonName: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { shortname: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { component: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { property: { contains: search, mode: Prisma.QueryMode.insensitive } },
            ],
          }
        : undefined

    const records = await this.db.prisma.loinc.findMany({
      where,
      take: take + 1,
      orderBy: { loincNum: 'asc' },
      select: LoincSummarySelect,
      ...(cursor
        ? {
            cursor: { loincNum: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = records.length > take
    const trimmed = hasNext ? records.slice(0, take) : records

    return {
      items: trimmed.map(this.mapToSummary),
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.loincNum ?? null : null,
    }
  }

  async get(loincNum: string): Promise<LoincDetail> {
    const record = await this.db.prisma.loinc
      .findUniqueOrThrow({
        where: { loincNum },
        select: LoincDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LoincNotFound)))

    return this.mapToDetail(record)
  }

  async create(input: CreateLoincInput): Promise<LoincDetail> {
    const record = await this.db.prisma.loinc.create({
      data: this.prepareMutationData(input),
      select: LoincDetailSelect,
    })

    return this.mapToDetail(record)
  }

  async update(loincNum: string, input: UpdateLoincInput): Promise<LoincDetail> {
    const record = await this.db.prisma.loinc
      .update({
        where: { loincNum },
        data: this.prepareMutationData(input),
        select: LoincDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LoincNotFound)))

    return this.mapToDetail(record)
  }

  async delete(loincNum: string): Promise<{ success: boolean }> {
    await this.db.prisma.loinc
      .delete({
        where: { loincNum },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LoincNotFound)))

    return { success: true }
  }

  private prepareMutationData(input: CreateLoincInput | UpdateLoincInput) {
    return Object.fromEntries(
      Object.entries({
        loincNum: 'loincNum' in input ? input.loincNum : undefined,
        longCommonName: input.longCommonName ?? null,
        shortname: input.shortname ?? null,
        component: input.component ?? null,
        property: input.property ?? null,
        timeAspct: input.timeAspct ?? null,
        system: input.system ?? null,
        scaleTyp: input.scaleTyp ?? null,
        methodTyp: input.methodTyp ?? null,
        class: input.class ?? null,
        status: input.status ?? null,
      }).filter(([, value]) => value !== undefined),
    )
  }

  private mapToSummary(record: {
    loincNum: string
    longCommonName: string | null
    shortname: string | null
  }): LoincSummary {
    return {
      loincNum: record.loincNum,
      longCommonName: record.longCommonName ?? null,
      shortname: record.shortname ?? null,
    }
  }

  private mapToDetail(record: {
    loincNum: string
    longCommonName: string | null
    shortname: string | null
    component: string | null
    property: string | null
    timeAspct: string | null
    system: string | null
    scaleTyp: string | null
    methodTyp: string | null
    class: string | null
    status: string | null
    createdAt: Date
    updatedAt: Date
  }): LoincDetail {
    return {
      loincNum: record.loincNum,
      longCommonName: record.longCommonName ?? null,
      shortname: record.shortname ?? null,
      component: record.component ?? null,
      property: record.property ?? null,
      timeAspct: record.timeAspct ?? null,
      system: record.system ?? null,
      scaleTyp: record.scaleTyp ?? null,
      methodTyp: record.methodTyp ?? null,
      class: record.class ?? null,
      status: record.status ?? null,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    }
  }
}

