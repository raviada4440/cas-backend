import { Get, Query, Req, UnauthorizedException } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { MyTasksQueryDto, TaskListResponseDto } from './tasks.dto'
import { TasksService } from './tasks.service'

type RequestWithOwner = FastifyRequest & {
  owner?: {
    id: string
  }
}

@ApiTags('Tasks')
@ApiController('tasks')
@Auth()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('my')
  @ApiOperation({ summary: 'List pending catalog tasks assigned to the current user' })
  @ApiOkResponse({ type: TaskListResponseDto })
  async listMyTasks(@Req() request: RequestWithOwner, @Query() query: MyTasksQueryDto) {
    const userId = request.owner?.id
    if (!userId) {
      throw new UnauthorizedException('未登录')
    }

    return this.tasksService.listMyTasks(userId, query)
  }
}

