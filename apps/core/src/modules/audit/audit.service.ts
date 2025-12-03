import { Injectable } from '@nestjs/common'
import { Prisma, TestCatalogAuditLog } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'

import { AuditLog, AuditLogList, TestAuditQuery } from '@shared/contracts/catalog'

@Injectable()
export class AuditService {
  constructor(private readonly database: DatabaseService) {}

  public async getTestAuditLogs(testId: string, query: TestAuditQuery): Promise<AuditLogList> {
    await this.ensureTestExists(testId)

    const take = Math.min(query.limit ?? 100, 200)
    const where: Prisma.TestCatalogAuditLogWhereInput = {
      testId,
    }

    if (typeof query.versionNumber === 'number') {
      where.versionNumber = query.versionNumber
    }

    if (query.configurationId) {
      where.configurationId = query.configurationId
    }

    if (query.action) {
      where.action = query.action
    }

    if (query.performedBy) {
      where.performedBy = query.performedBy
    }

    if (query.from || query.to) {
      const performedAt: Prisma.DateTimeFilter = {}
      if (query.from) {
        performedAt.gte = new Date(query.from)
      }
      if (query.to) {
        performedAt.lte = new Date(query.to)
      }
      where.performedAt = performedAt
    }

    const auditLogs = await this.database.prisma.testCatalogAuditLog.findMany({
      where,
      orderBy: [{ performedAt: 'desc' }, { id: 'desc' }],
      take: take + 1,
      ...(query.cursor ? { cursor: { id: query.cursor }, skip: 1 } : {}),
    })

    const items = await this.mapAuditLogs(auditLogs.slice(0, take))
    const nextCursor = auditLogs.length > take ? auditLogs[take].id : null

    return {
      items,
      nextCursor,
    }
  }

  private async mapAuditLogs(logs: TestCatalogAuditLog[]): Promise<AuditLog[]> {
    if (logs.length === 0) {
      return []
    }

    const performerIds = Array.from(
      new Set(logs.map((log) => log.performedBy).filter((id): id is string => Boolean(id))),
    )

    type PerformerEntity = { id: string; name: string | null; email: string | null }

    const performers: PerformerEntity[] = performerIds.length
      ? await this.database.prisma.user.findMany({
          where: { id: { in: performerIds } },
          select: {
            id: true,
            name: true,
            email: true,
          },
        })
      : []

    const performerMap = new Map<string, PerformerEntity>(performers.map((user) => [user.id, user]))

    return logs.map((log) => {
      const performer = log.performedBy ? performerMap.get(log.performedBy) : undefined
      const performerRecord = performer
        ? {
            id: performer.id,
            name: performer.name ?? null,
            email: performer.email ?? null,
          }
        : null

      return {
        id: log.id,
        action: log.action,
        fieldName: log.fieldName ?? null,
        oldValue: log.oldValue ?? null,
        newValue: log.newValue ?? null,
        changeReason: log.changeReason ?? null,
        versionNumber: log.versionNumber ?? null,
        configurationId: log.configurationId ?? null,
        performedBy: log.performedBy ?? null,
        performer: performerRecord,
        performedAt: log.performedAt.toISOString(),
        ipAddress: log.ipAddress ?? null,
        userAgent: log.userAgent ?? null,
        createdAt: log.createdAt.toISOString(),
        updatedAt: log.updatedAt.toISOString(),
      }
    })
  }

  private async ensureTestExists(testId: string) {
    return this.database.prisma.testCatalog
      .findUniqueOrThrow({
        where: { id: testId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))
  }
}
