import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Get, Param, Patch, Post, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import {
  FacilityDirectoryQueryDto,
  FacilityIdParamDto,
  FacilityCreateDto,
  OrganizationAncestryResponseDto,
  OrganizationCreateDto,
  OrganizationDirectoryQueryDto,
  OrganizationFavoriteCreateDto,
  OrganizationFavoriteTestListResponseDto,
  OrganizationIdParamDto,
  OrganizationResultListResponseDto,
  OrganizationUpdateDto,
  ProviderAssociationDto,
  ProviderSummaryDto,
  UserListResponseDto,
} from './organizations.dto'
import { OrganizationsService } from './organizations.service'

@Auth()
@ApiTags('Orders - Organizations')
@ApiController('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get('/')
  @ApiOperation({ summary: 'List organizations' })
  list(@Query() query: OrganizationDirectoryQueryDto) {
    return this.organizationsService.listOrganizations(query)
  }

  @Get('/facilities')
  @ApiOperation({ summary: 'List facilities' })
  listFacilities(@Query() query: FacilityDirectoryQueryDto) {
    return this.organizationsService.listFacilities(query)
  }

  @Get('/facilities/:facilityId')
  @ApiOperation({ summary: 'Get facility detail' })
  getFacility(@Param() params: FacilityIdParamDto) {
    return this.organizationsService.getFacility(params.facilityId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create organization' })
  createOrganization(@Body() input: OrganizationCreateDto) {
    return this.organizationsService.createOrganization(input)
  }

  @Post('/facilities')
  @ApiOperation({ summary: 'Create facility' })
  createFacility(@Body() input: FacilityCreateDto) {
    return this.organizationsService.createFacility(input)
  }

  @Get('/:organizationId')
  @ApiOperation({ summary: 'Get organization detail' })
  getOrganization(@Param() params: OrganizationIdParamDto) {
    return this.organizationsService.getOrganization(params.organizationId)
  }

  @Patch('/:organizationId')
  @ApiOperation({ summary: 'Update organization' })
  updateOrganization(
    @Param() params: OrganizationIdParamDto,
    @Body() input: OrganizationUpdateDto,
  ) {
    return this.organizationsService.updateOrganization(params.organizationId, input)
  }

  @Get('/:organizationId/users')
  @ApiOperation({ summary: 'List organization users' })
  @ApiOkResponse({ type: UserListResponseDto })
  listOrganizationUsers(@Param() params: OrganizationIdParamDto) {
    return this.organizationsService.listOrganizationUsers(params.organizationId)
  }

  @Get('/:organizationId/tests')
  @ApiOperation({ summary: 'List organization favorite tests' })
  @ApiOkResponse({ type: OrganizationFavoriteTestListResponseDto })
  listOrganizationFavorites(@Param() params: OrganizationIdParamDto) {
    return this.organizationsService.listOrganizationFavoriteTests(params.organizationId)
  }

  @Post('/:organizationId/tests')
  @ApiOperation({ summary: 'Add organization favorite test' })
  addOrganizationFavorite(
    @Param() params: OrganizationIdParamDto,
    @Body() input: OrganizationFavoriteCreateDto,
  ) {
    return this.organizationsService.addOrganizationFavoriteTest(params.organizationId, input)
  }

  @Get('/:organizationId/lab-orders')
  @ApiOperation({ summary: 'List organization lab orders' })
  @ApiOkResponse({ type: OrganizationResultListResponseDto })
  listOrganizationResults(@Param() params: OrganizationIdParamDto) {
    return this.organizationsService.listOrganizationResults(params.organizationId)
  }

  @Get('/:organizationId/ancestry')
  @ApiOperation({ summary: 'Get organization ancestry' })
  @ApiOkResponse({ type: OrganizationAncestryResponseDto })
  getOrganizationAncestry(@Param() params: OrganizationIdParamDto) {
    return this.organizationsService.getOrganizationAncestry(params.organizationId)
  }

  @Post('/:organizationId/providers')
  @ApiOperation({ summary: 'Associate provider with organization' })
  @ApiOkResponse({ type: ProviderSummaryDto })
  associateProvider(
    @Param() params: OrganizationIdParamDto,
    @Body() input: ProviderAssociationDto,
  ) {
    return this.organizationsService.associateProviderWithOrganization(
      params.organizationId,
      input.providerId,
    )
  }
}
