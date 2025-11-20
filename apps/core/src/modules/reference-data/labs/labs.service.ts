import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable } from '@nestjs/common'

import { Prisma } from '@db/client'
import {
  CreateLabInput,
  LabDetail,
  LabSearchQuery,
  LabSearchResponse,
  LabSummary,
  UpdateLabInput,
} from './labs.dto'
import { LabDetailSelect, LabSummarySelect } from './labs.protect'

@Injectable()
export class LabsService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: LabSearchQuery): Promise<LabSearchResponse> {
    const { search, limit, cursor } = query
    const take = Math.min(Math.max(limit, 1), 50)
    const where =
      search && search.trim().length > 0
        ? {
            OR: [
              { labName: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { labCode: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { city: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { state: { contains: search, mode: Prisma.QueryMode.insensitive } },
            ],
          }
        : undefined

    const labs = await this.db.prisma.lab.findMany({
      where,
      take: take + 1,
      orderBy: { createdAt: 'desc' },
      select: LabSummarySelect,
      ...(cursor
        ? {
            cursor: { id: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = labs.length > take
    const trimmed = hasNext ? labs.slice(0, take) : labs
    const items = trimmed.map(this.mapToSummary)

    return {
      items,
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.id ?? null : null,
    }
  }

  async get(labId: string): Promise<LabDetail> {
    const lab = await this.db.prisma.lab
      .findUniqueOrThrow({
        where: { id: labId },
        select: LabDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LabNotFound)))

    return this.mapToDetail(lab)
  }

  async create(input: CreateLabInput): Promise<LabDetail> {
    const lab = await this.db.prisma.lab.create({
      data: this.prepareMutationData(input),
      select: LabDetailSelect,
    })

    return this.mapToDetail(lab)
  }

  async update(labId: string, input: UpdateLabInput): Promise<LabDetail> {
    const lab = await this.db.prisma.lab
      .update({
        where: { id: labId },
        data: this.prepareMutationData(input),
        select: LabDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LabNotFound)))

    return this.mapToDetail(lab)
  }

  async delete(labId: string): Promise<{ success: boolean }> {
    await this.db.prisma.lab
      .delete({
        where: { id: labId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LabNotFound)))

    return { success: true }
  }

  private prepareMutationData(input: CreateLabInput | UpdateLabInput) {
    return Object.fromEntries(
      Object.entries(input).filter(([, value]) => value !== undefined),
    )
  }

  private mapToSummary = (lab: { id: string; labName: string | null; labCode: string | null; city: string | null; state: string | null }): LabSummary => ({
    id: lab.id,
    labName: lab.labName ?? null,
    labCode: lab.labCode ?? null,
    city: lab.city ?? null,
    state: lab.state ?? null,
  })

  private mapToDetail(lab: {
    id: string
    labName: string | null
    labCode: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    createdAt: Date
    updatedAt: Date
  }): LabDetail {
    return {
      id: lab.id,
      labName: lab.labName ?? null,
      labCode: lab.labCode ?? null,
      address: lab.address ?? null,
      city: lab.city ?? null,
      state: lab.state ?? null,
      zip: lab.zip ?? null,
      createdAt: lab.createdAt.toISOString(),
      updatedAt: lab.updatedAt.toISOString(),
    }
  }
}

