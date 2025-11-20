import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Injectable } from '@nestjs/common'

import { Prisma } from '@db/client'
import {
  BiomarkerDetail,
  BiomarkerSearchQuery,
  BiomarkerSearchResponse,
  BiomarkerSummary,
  CreateBiomarkerInput,
  UpdateBiomarkerInput,
} from './biomarkers.dto'
import { BiomarkerDetailSelect, BiomarkerSummarySelect } from './biomarkers.protect'

@Injectable()
export class BiomarkersService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: BiomarkerSearchQuery): Promise<BiomarkerSearchResponse> {
    const { search, limit, cursor } = query
    const take = Math.min(Math.max(limit, 1), 50)
    const where =
      search && search.trim().length > 0
        ? {
            OR: [
              { hgncId: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { hgncApprovedSymbol: { contains: search, mode: Prisma.QueryMode.insensitive } },
              { hgncApprovedName: { contains: search, mode: Prisma.QueryMode.insensitive } },
            ],
          }
        : undefined

    const biomarkers = await this.db.prisma.biomarker.findMany({
      where,
      take: take + 1,
      orderBy: { hgncId: 'asc' },
      select: BiomarkerSummarySelect,
      ...(cursor
        ? {
            cursor: { hgncId: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = biomarkers.length > take
    const trimmed = hasNext ? biomarkers.slice(0, take) : biomarkers
    const items = trimmed.map(this.mapToSummary)

    return {
      items,
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.hgncId ?? null : null,
    }
  }

  async get(hgncId: string): Promise<BiomarkerDetail> {
    const biomarker = await this.db.prisma.biomarker
      .findUniqueOrThrow({
        where: { hgncId },
        select: BiomarkerDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.BiomarkerNotFound)))

    return this.mapToDetail(biomarker)
  }

  async create(input: CreateBiomarkerInput): Promise<BiomarkerDetail> {
    const biomarker = await this.db.prisma.biomarker.create({
      data: this.prepareCreateData(input),
      select: BiomarkerDetailSelect,
    })
    return this.mapToDetail(biomarker)
  }

  async update(hgncId: string, input: UpdateBiomarkerInput): Promise<BiomarkerDetail> {
    const biomarker = await this.db.prisma.biomarker
      .update({
        where: { hgncId },
        data: this.prepareUpdateData(input),
        select: BiomarkerDetailSelect,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.BiomarkerNotFound)))

    return this.mapToDetail(biomarker)
  }

  async delete(hgncId: string): Promise<{ success: boolean }> {
    await this.db.prisma.biomarker
      .delete({
        where: { hgncId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.BiomarkerNotFound)))

    return { success: true }
  }

  private prepareCreateData(input: CreateBiomarkerInput) {
    return {
      hgncId: input.hgncId,
      hgncStatus: input.hgncStatus ?? null,
      hgncApprovedSymbol: input.hgncApprovedSymbol ?? null,
      hgncApprovedName: input.hgncApprovedName ?? null,
    }
  }

  private prepareUpdateData(input: UpdateBiomarkerInput) {
    return Object.fromEntries(
      Object.entries({
        hgncStatus: input.hgncStatus ?? null,
        hgncApprovedSymbol: input.hgncApprovedSymbol ?? null,
        hgncApprovedName: input.hgncApprovedName ?? null,
      }).filter(([, value]) => value !== undefined),
    )
  }

  private mapToSummary(b: {
    hgncId: string
    hgncApprovedSymbol: string | null
    hgncApprovedName: string | null
  }): BiomarkerSummary {
    return {
      hgncId: b.hgncId,
      hgncApprovedSymbol: b.hgncApprovedSymbol ?? null,
      hgncApprovedName: b.hgncApprovedName ?? null,
    }
  }

  private mapToDetail(b: {
    hgncId: string
    hgncApprovedSymbol: string | null
    hgncApprovedName: string | null
    hgncStatus: string | null
    createdAt: Date
    updatedAt: Date
  }): BiomarkerDetail {
    return {
      hgncId: b.hgncId,
      hgncApprovedSymbol: b.hgncApprovedSymbol ?? null,
      hgncApprovedName: b.hgncApprovedName ?? null,
      hgncStatus: b.hgncStatus ?? null,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
    }
  }
}

