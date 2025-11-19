import { BizException } from '@core/common/exceptions/biz.exception'
import { BusinessEvents } from '@core/constants/business-event.constant'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { EventManagerService } from '@core/processors/helper/helper.event.service'
import { PagerDto } from '@core/shared/dto/pager.dto'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Prisma } from '@db/client'
import { Injectable } from '@nestjs/common'

import { PostDto, PostInput } from './post.dto'

@Injectable()
export class PostService {
  constructor(
    private readonly db: DatabaseService,
    private readonly eventService: EventManagerService,
  ) {}

  async create(dto: PostDto) {
    const { slug, categoryId } = dto as PostInput
    const exist = await this.db.prisma.post.findUnique({
      where: {
        slug_categoryId: {
          slug,
          categoryId,
        },
      },
      select: { id: true },
    })

    if (exist) {
      throw new BizException(ErrorCodeEnum.PostExist)
    }

    const category = await this.db.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      select: {
        id: true,
      },
    })
    if (!category) {
      throw new BizException(ErrorCodeEnum.CategoryNotFound)
    }

    const data: Prisma.PostUncheckedCreateInput = {
      slug,
      text: dto.text,
      title: dto.title,
      categoryId,
    }

    const model = await this.db.prisma.post.create({
      data: {
        ...data,
      },
      include: { category: true },
    })

    this.eventService.event(BusinessEvents.POST_CREATE, model)

    return model
  }

  async paginatePosts(options: PagerDto) {
    const { size = 10, page = 1 } = options
    return this.db.prisma.post.paginate(
      {
        include: {
          category: true,
        },
        orderBy: {
          created: 'desc',
        },
      },
      {
        size,
        page,
      },
    )
  }

  async getPostById(id: string) {
    return this.db.prisma.post
      .findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          category: true,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.PostNotFound)))
  }
}
