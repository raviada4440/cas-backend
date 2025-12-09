import { Injectable } from '@nestjs/common'

import { DatabaseService } from '@core/processors/database/database.service'
import { $Enums } from '@db/client'

import { MyTasksQuery, TaskItem, TaskListResponse } from './tasks.dto'

const DEFAULT_LIMIT = 5
const MAX_LIMIT = 20

@Injectable()
export class TasksService {
  constructor(private readonly db: DatabaseService) {}

  async listMyTasks(_userId: string, query: MyTasksQuery): Promise<TaskListResponse> {
    const limit = Math.min(Math.max(query.limit ?? DEFAULT_LIMIT, 1), MAX_LIMIT)

    const approvals = await this.db.prisma.testCatalogApproval.findMany({
      where: {
        status: $Enums.ApprovalStatus.PENDING,
      },
      orderBy: {
        createdAt: 'asc',
      },
      take: limit,
      include: {
        version: {
          select: {
            id: true,
            versionNumber: true,
            test: {
              select: {
                id: true,
                testName: true,
              },
            },
          },
        },
      },
    })

    const items: TaskItem[] = approvals
      .filter((approval) => approval.version)
      .map((approval) => {
        const version = approval.version!
        return {
          id: approval.id,
          testId: version.test.id,
          testName: version.test.testName ?? '',
          versionId: version.id,
          versionNumber: version.versionNumber,
          stepName: approval.stepName,
          status: approval.status,
          createdAt: approval.createdAt.toISOString(),
        }
      })

    return { items }
  }
}
