import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Get, Param, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import {
  OrganizationEndpointDirectoryQueryDto,
  OrganizationEndpointIdParamDto,
} from './organizations.dto'
import { OrganizationEndpointsService } from './organization-endpoints.service'

@Auth()
@ApiTags('Orders - Organization Endpoints')
@ApiController('public/organizations/endpoints')
export class OrganizationEndpointsController {
  constructor(private readonly organizationEndpointsService: OrganizationEndpointsService) {}

  @Get('/')
  @ApiOperation({ summary: 'List organization endpoints' })
  list(@Query() query: OrganizationEndpointDirectoryQueryDto) {
    return this.organizationEndpointsService.list(query)
  }

  @Get('/:endpointId')
  @ApiOperation({ summary: 'Get organization endpoint detail' })
  detail(@Param() params: OrganizationEndpointIdParamDto) {
    return this.organizationEndpointsService.detail(params.endpointId)
  }
}
