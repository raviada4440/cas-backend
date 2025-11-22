import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Get, Param, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { AdminUsersService } from './users.service'
import { UserIdParamDto, UserSearchQueryDto } from './users.dto'

@ApiTags('Admin - Users')
@ApiController('users')
export class AdminUsersController {
  constructor(private readonly usersService: AdminUsersService) {}

  @Get('/')
  @ApiOperation({ summary: 'List users' })
  list(@Query() query: UserSearchQueryDto) {
    return this.usersService.list(query)
  }

  @Get('/:userId')
  @ApiOperation({ summary: 'Get user detail' })
  detail(@Param() params: UserIdParamDto) {
    return this.usersService.detail(params.userId)
  }
}
