import { Get, Query, Req, UnauthorizedException } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'
import { I18nService } from 'nestjs-i18n'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { MyTasksQueryDto, TaskListResponseDto } from './tasks.dto'
import { TasksService } from './tasks.service'
import { TenantMembership } from '../auth/auth.service'

type RequestWithOwner = FastifyRequest & {
  owner?: {
    id: string
  }
  tenants?: TenantMembership[]
  tenant?: TenantMembership | null
  isSuperAdmin?: boolean
  i18nLang?: string
}

@ApiTags('Tasks')
@ApiController('tasks')
@Auth()
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly i18n: I18nService,
  ) {}

  @Get('my')
  @ApiOperation({ summary: 'List pending catalog tasks assigned to the current user' })
  @ApiOkResponse({ type: TaskListResponseDto })
  async listMyTasks(@Req() request: RequestWithOwner, @Query() query: MyTasksQueryDto) {
    const userId = request.owner?.id
    if (!userId) {
      throw new UnauthorizedException(
        await this.i18n.translate('errors.not_authenticated', {
          lang: request.i18nLang,
        }),
      )
    }

    return this.tasksService.listMyTasks(userId, query)
  }
}
