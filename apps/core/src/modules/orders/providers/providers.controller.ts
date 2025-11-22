import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  CreateProviderDto,
  ProviderDetailDto,
  ProviderEducationListResponseDto,
  ProviderFavoriteCreateDto,
  ProviderFavoriteTestListResponseDto,
  ProviderFavoriteTestRecordDto,
  ProviderIdParamDto,
  ProviderOrganizationListResponseDto,
  ProviderOrganizationQueryDto,
  ProviderOrderListResponseDto,
  ProviderSearchQueryDto,
  ProviderSearchResponseDto,
  ProviderUserAccountInputDto,
  ProviderUserAccountResponseDto,
  UpdateProviderDto,
} from './providers.dto'
import { ProvidersService } from './providers.service'

@ApiTags('Orders - Providers')
@ApiController('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search providers' })
  @ApiOkResponse({ type: ProviderSearchResponseDto })
  list(@Query() query: ProviderSearchQueryDto) {
    return this.providersService.search(query)
  }

  @Get('/:providerId')
  @ApiOperation({ summary: 'Get provider detail' })
  @ApiOkResponse({ type: ProviderDetailDto })
  detail(@Param() params: ProviderIdParamDto) {
    return this.providersService.detail(params.providerId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create provider' })
  @ApiOkResponse({ type: ProviderDetailDto })
  create(@Body() body: CreateProviderDto) {
    return this.providersService.create(body)
  }

  @Put('/:providerId')
  @ApiOperation({ summary: 'Update provider' })
  @ApiOkResponse({ type: ProviderDetailDto })
  update(@Param() params: ProviderIdParamDto, @Body() body: UpdateProviderDto) {
    return this.providersService.update(params.providerId, body)
  }

  @Delete('/:providerId')
  @ApiOperation({ summary: 'Delete provider' })
  @ApiOkResponse({ description: 'Deletion success flag' })
  remove(@Param() params: ProviderIdParamDto) {
    return this.providersService.delete(params.providerId)
  }

  @Get('/:providerId/organizations')
  @ApiOperation({ summary: 'List provider organizations' })
  @ApiOkResponse({ type: ProviderOrganizationListResponseDto })
  listOrganizations(
    @Param() params: ProviderIdParamDto,
    @Query() query: ProviderOrganizationQueryDto,
  ) {
    return this.providersService.listOrganizations(params.providerId, query)
  }

  @Get('/:providerId/education')
  @ApiOperation({ summary: 'List provider education records' })
  @ApiOkResponse({ type: ProviderEducationListResponseDto })
  listEducation(@Param() params: ProviderIdParamDto) {
    return this.providersService.listEducation(params.providerId)
  }

  @Get('/:providerId/favorite-tests')
  @ApiOperation({ summary: 'List provider favorite tests' })
  @ApiOkResponse({ type: ProviderFavoriteTestListResponseDto })
  listFavoriteTests(@Param() params: ProviderIdParamDto) {
    return this.providersService.listFavoriteTests(params.providerId)
  }

  @Post('/:providerId/favorite-tests')
  @ApiOperation({ summary: 'Add provider favorite test' })
  @ApiOkResponse({ type: ProviderFavoriteTestRecordDto })
  addFavoriteTest(@Param() params: ProviderIdParamDto, @Body() body: ProviderFavoriteCreateDto) {
    return this.providersService.addFavoriteTest(params.providerId, body)
  }

  @Get('/:providerId/orders')
  @ApiOperation({ summary: 'List provider lab orders' })
  @ApiOkResponse({ type: ProviderOrderListResponseDto })
  listOrders(@Param() params: ProviderIdParamDto) {
    return this.providersService.listOrders(params.providerId)
  }

  @Post('/:providerId/user-account')
  @ApiOperation({ summary: 'Create provider user account' })
  @ApiOkResponse({ type: ProviderUserAccountResponseDto })
  createUserAccount(
    @Param() params: ProviderIdParamDto,
    @Body() body: ProviderUserAccountInputDto,
  ) {
    return this.providersService.createUserAccount(params.providerId, body)
  }
}
