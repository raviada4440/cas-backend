import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  AssignRoleDto,
  BulkAssignRolesDto,
  CreateRoleDto,
  ExpiredUserRolesQueryDto,
  ListRolesQueryDto,
  PermissionQueryDto,
  RemoveRoleDto,
  RoleIdParamDto,
  RoleNameParamDto,
  UpdateRoleDto,
  UpdateUserRoleDto,
  UserIdParamDto,
} from './roles.dto'
import { RolesService } from './roles.service'

@ApiTags('Admin - Roles')
@ApiController('admin/roles')
export class RolesController {
  constructor(private readonly service: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.service.create(dto)
  }

  @Patch(':id')
  update(@Param() params: RoleIdParamDto, @Body() dto: UpdateRoleDto) {
    return this.service.update(params.id, dto)
  }

  @Get()
  list(@Query() query: ListRolesQueryDto) {
    return this.service.list(query)
  }

  @Get('name/:name')
  findByName(@Param() params: RoleNameParamDto) {
    return this.service.findByName(params.name)
  }

  @Get(':id')
  findById(@Param() params: RoleIdParamDto) {
    return this.service.findById(params.id)
  }

  @Delete(':id')
  remove(@Param() params: RoleIdParamDto) {
    return this.service.remove(params.id)
  }

  @Post(':id/assign')
  assignRole(@Param() params: RoleIdParamDto, @Body() dto: AssignRoleDto) {
    return this.service.assignRole(params.id, dto)
  }

  @Post(':id/remove')
  removeRole(@Param() params: RoleIdParamDto, @Body() dto: RemoveRoleDto) {
    return this.service.removeRole(params.id, dto)
  }

  @Patch(':id/users/:userId')
  updateUserRole(
    @Param() params: RoleIdParamDto,
    @Param() userParams: UserIdParamDto,
    @Body() dto: UpdateUserRoleDto,
  ) {
    return this.service.updateUserRole(params.id, userParams.userId, dto)
  }

  @Get(':id/users')
  getUsersWithRole(@Param() params: RoleIdParamDto) {
    return this.service.getUsersWithRole(params.id)
  }

  @Get('user/:userId/roles')
  getUserRoles(@Param() params: UserIdParamDto) {
    return this.service.getUserRoles(params.userId)
  }

  @Get('user/:userId/permissions')
  getUserPermissions(@Param() params: UserIdParamDto) {
    return this.service.getUserPermissions(params.userId)
  }

  @Get('user/:userId/permissions/check')
  hasPermission(@Param() params: UserIdParamDto, @Query() query: PermissionQueryDto) {
    return this.service.hasPermission(params.userId, query.permission)
  }

  @Post('user/:userId/bulk-assign')
  bulkAssign(@Param() params: UserIdParamDto, @Body() dto: BulkAssignRolesDto) {
    return this.service.bulkAssignRoles(params.userId, dto)
  }

  @Get('expired')
  expired(@Query() query: ExpiredUserRolesQueryDto) {
    return this.service.expiredUserRoles(query)
  }

  @Get('stats/summary')
  stats() {
    return this.service.stats()
  }

  @Get('lookup/roles-as-users')
  fetchRoles() {
    return this.service.fetchRoles()
  }

  @Get('lookup/user-types')
  fetchUserTypes() {
    return this.service.fetchUserTypes()
  }
}
