import { Injectable } from '@nestjs/common'

import { DatabaseService } from '@core/processors/database/database.service'

import { ReviewerResponse } from './review.dto'

@Injectable()
export class ReviewService {
  constructor(private readonly database: DatabaseService) {}

  public async listReviewers(): Promise<ReviewerResponse[]> {
    const reviewers = await this.database.prisma.user.findMany({
      where: {
        userRoles: {
          some: {
            role: {
              name: 'catalog-reviewer',
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        name: 'asc',
      },
    })

    return reviewers.map((reviewer) => ({
      id: reviewer.id,
      name: reviewer.name ?? 'Reviewer',
      email: reviewer.email ?? '',
    }))
  }
}
