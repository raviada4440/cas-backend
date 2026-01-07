import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import {
  CreateProviderDto,
  ProviderBulkUpdateDto,
  ProviderBulkUpdateResultDto,
  ProviderByNpiParamDto,
  ProviderDetailDto,
  ProviderEducationCreateDto,
  ProviderEducationListResponseDto,
  ProviderEducationRecordDto,
  ProviderFavoriteCreateDto,
  ProviderFavoriteTestListResponseDto,
  ProviderFavoriteTestRecordDto,
  ProviderIdParamDto,
  ProviderOrganizationLinkDto,
  ProviderOrganizationRecordDto,
  ProviderOrganizationListResponseDto,
  ProviderOrganizationQueryDto,
  ProviderOrderListResponseDto,
  ProviderSearchQueryDto,
  ProviderSearchResponseDto,
  ProviderStatsResponseDto,
  ProviderUpsertDto,
  ProviderUserAccountInputDto,
  ProviderUserAccountResponseDto,
  UpdateProviderDto,
} from './providers.dto'
import { ProvidersService } from './providers.service'
import { AuthenticatedRequest } from '@core/transformers/get-req.transformer'

@Auth()
@ApiTags('Orders - Providers')
@ApiController('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search providers' })
  @ApiOkResponseEnvelope(ProviderSearchResponseDto)
  list(@Query() query: ProviderSearchQueryDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.search(query, this.getScope(request))
  }

  // Alias to avoid `/providers/search` falling into `/:providerId` and causing 422.
  @Get('/search')
  @ApiOperation({ summary: 'Search providers (alias)' })
  @ApiOkResponseEnvelope(ProviderSearchResponseDto)
  search(@Query() query: ProviderSearchQueryDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.search(query, this.getScope(request))
  }

  @Get('/stats')
  @ApiOperation({ summary: 'Provider statistics' })
  @ApiOkResponseEnvelope(ProviderStatsResponseDto)
  stats(@Req() request: AuthenticatedRequest) {
    return this.providersService.stats(this.getScope(request))
  }

  @Get('/npi/:npi')
  @ApiOperation({ summary: 'Get provider by NPI' })
  @ApiOkResponseEnvelope(ProviderDetailDto)
  detailByNpi(@Param() params: ProviderByNpiParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.detailByNpi(params.npi, this.getScope(request))
  }

  @Post('/bulk-update')
  @ApiOperation({ summary: 'Bulk update providers' })
  @ApiOkResponseEnvelope(ProviderBulkUpdateResultDto)
  bulkUpdate(@Body() body: ProviderBulkUpdateDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.bulkUpdate(body, this.getScope(request))
  }

  @Get('/:providerId')
  @ApiOperation({ summary: 'Get provider detail' })
  @ApiOkResponseEnvelope(ProviderDetailDto)
  detail(@Param() params: ProviderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.detail(params.providerId, this.getScope(request))
  }

  @Post('/')
  @ApiOperation({ summary: 'Create provider' })
  @ApiOkResponseEnvelope(ProviderDetailDto)
  create(@Body() body: CreateProviderDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.create(body, this.getScope(request))
  }

  @Post('/upsert')
  @ApiOperation({ summary: 'Create or update provider' })
  @ApiOkResponseEnvelope(ProviderDetailDto)
  upsert(@Body() body: ProviderUpsertDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.upsert(body, this.getScope(request))
  }

  @Put('/:providerId')
  @ApiOperation({ summary: 'Update provider' })
  @ApiOkResponseEnvelope(ProviderDetailDto)
  update(
    @Param() params: ProviderIdParamDto,
    @Body() body: UpdateProviderDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.update(params.providerId, body, this.getScope(request))
  }

  @Delete('/:providerId')
  @ApiOperation({ summary: 'Delete provider' })
  @ApiOkResponseEnvelope({ description: 'Deletion success flag' })
  remove(@Param() params: ProviderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.delete(params.providerId, this.getScope(request))
  }

  @Get('/:providerId/organizations')
  @ApiOperation({ summary: 'List provider organizations' })
  @ApiOkResponseEnvelope(ProviderOrganizationListResponseDto)
  listOrganizations(
    @Param() params: ProviderIdParamDto,
    @Query() query: ProviderOrganizationQueryDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.listOrganizations(params.providerId, query, this.getScope(request))
  }

  @Post('/:providerId/organizations')
  @ApiOperation({ summary: 'Link provider to organization' })
  @ApiOkResponseEnvelope(ProviderOrganizationRecordDto)
  addOrganization(
    @Param() params: ProviderIdParamDto,
    @Body() body: ProviderOrganizationLinkDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.linkOrganization(params.providerId, body, this.getScope(request))
  }

  @Delete('/:providerId/organizations/:organizationId')
  @ApiOperation({ summary: 'Remove provider from organization' })
  removeOrganization(
    @Param('providerId') providerId: string,
    @Param('organizationId') organizationId: string,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.unlinkOrganization(
      providerId,
      organizationId,
      this.getScope(request),
    )
  }

  @Get('/:providerId/education')
  @ApiOperation({ summary: 'List provider education records' })
  @ApiOkResponseEnvelope(ProviderEducationListResponseDto)
  listEducation(@Param() params: ProviderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.listEducation(params.providerId, this.getScope(request))
  }

  @Post('/:providerId/education')
  @ApiOperation({ summary: 'Add provider education record' })
  @ApiOkResponseEnvelope(ProviderEducationRecordDto)
  addEducation(
    @Param() params: ProviderIdParamDto,
    @Body() body: ProviderEducationCreateDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.addEducation(params.providerId, body, this.getScope(request))
  }

  @Get('/:providerId/favorite-tests')
  @ApiOperation({ summary: 'List provider favorite tests' })
  @ApiOkResponseEnvelope(ProviderFavoriteTestListResponseDto)
  listFavoriteTests(@Param() params: ProviderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.listFavoriteTests(params.providerId, this.getScope(request))
  }

  @Post('/:providerId/favorite-tests')
  @ApiOperation({ summary: 'Add provider favorite test' })
  @ApiOkResponseEnvelope(ProviderFavoriteTestRecordDto)
  addFavoriteTest(
    @Param() params: ProviderIdParamDto,
    @Body() body: ProviderFavoriteCreateDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.addFavoriteTest(params.providerId, body, this.getScope(request))
  }

  @Get('/:providerId/orders')
  @ApiOperation({ summary: 'List provider lab orders' })
  @ApiOkResponseEnvelope(ProviderOrderListResponseDto)
  listOrders(@Param() params: ProviderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.providersService.listOrders(params.providerId, this.getScope(request))
  }

  @Post('/:providerId/user-account')
  @ApiOperation({ summary: 'Create provider user account' })
  @ApiOkResponseEnvelope(ProviderUserAccountResponseDto)
  createUserAccount(
    @Param() params: ProviderIdParamDto,
    @Body() body: ProviderUserAccountInputDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.providersService.createUserAccount(params.providerId, body, this.getScope(request))
  }

  private getScope(request: AuthenticatedRequest) {
    return {
      tenantIds: request.tenantIds ?? [],
      isSuperAdmin: request.isSuperAdmin ?? false,
    }
  }
}
