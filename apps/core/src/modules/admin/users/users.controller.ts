import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Get, Param, Post, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { AdminUsersService } from './users.service'
import {
  InviteUserRequestAdminDto,
  InviteUserResponseAdminDto,
  UserDetailDto,
  UserEmailQueryDto,
  UserIdParamDto,
  UserListResponseDto,
  UserSearchQueryDto,
} from './users.dto'

@Auth()
@ApiTags('Admin - Users')
@ApiController('users')
export class AdminUsersController {
  constructor(private readonly usersService: AdminUsersService) {}

  @Get('/')
  @ApiOperation({ summary: 'List users' })
  @ApiOkResponseEnvelope(UserListResponseDto)
  list(@Query() query: UserSearchQueryDto) {
    return this.usersService.list(query)
  }

  @Post('/')
  @ApiOperation({ summary: 'Invite a new user' })
  @ApiOkResponseEnvelope(InviteUserResponseAdminDto)
  invite(@Body() body: InviteUserRequestAdminDto) {
    return this.usersService.invite(body)
  }

  @Get('/lookup')
  @ApiOperation({ summary: 'Get user detail by email' })
  @ApiOkResponseEnvelope(UserDetailDto)
  detailByEmail(@Query() query: UserEmailQueryDto) {
    return this.usersService.detailByEmail(query.email)
  }

  @Get('/:userId')
  @ApiOperation({ summary: 'Get user detail' })
  @ApiOkResponseEnvelope(UserDetailDto)
  detail(@Param() params: UserIdParamDto) {
    return this.usersService.detail(params.userId)
  }
}
