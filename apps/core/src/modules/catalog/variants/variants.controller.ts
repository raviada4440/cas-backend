import { Body, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  BulkUpsertBiomarkersDto,
  ConfigurationIdParamDto,
  CreateOperationalVariantDto,
  DeleteBiomarkersDto,
  ListOperationalVariantsQueryDto,
  UpsertCustomerVariantDto,
  UpdateOperationalVariantDto,
} from './variants.dto'
import { VariantsService } from './variants.service'

@ApiTags('Catalog - Variants')
@ApiController('catalog/tests/:testId/variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Get('operational')
  @ApiOperation({ summary: 'List operational variants' })
  listOperational(
    @Param('testId') testId: string,
    @Query() query: ListOperationalVariantsQueryDto,
  ) {
    return this.variantsService.listOperationalVariants(testId, query.versionId)
  }

  @Post('operational')
  @ApiOperation({ summary: 'Create operational variant' })
  createOperational(@Param('testId') testId: string, @Body() body: CreateOperationalVariantDto) {
    return this.variantsService.createOperationalVariant(testId, body)
  }

  @Put('operational/:configurationId')
  @ApiOperation({ summary: 'Update operational variant' })
  updateOperational(
    @Param('testId') testId: string,
    @Param('configurationId') configurationId: string,
    @Body() body: UpdateOperationalVariantDto,
  ) {
    return this.variantsService.updateOperationalVariant(testId, configurationId, body)
  }

  @Get('customer')
  @ApiOperation({ summary: 'List customer variants' })
  listCustomer(@Param('testId') testId: string) {
    return this.variantsService.listCustomerVariants(testId)
  }

  @Post('customer')
  @ApiOperation({ summary: 'Create customer variant' })
  createCustomer(@Param('testId') testId: string, @Body() body: UpsertCustomerVariantDto) {
    return this.variantsService.upsertCustomerVariant(testId, undefined, body)
  }

  @Put('customer/:configurationId')
  @ApiOperation({ summary: 'Update customer variant' })
  updateCustomer(
    @Param('testId') testId: string,
    @Param('configurationId') configurationId: string,
    @Body() body: UpsertCustomerVariantDto,
  ) {
    return this.variantsService.upsertCustomerVariant(testId, configurationId, body)
  }
}

@ApiTags('Catalog - Variant Biomarkers')
@ApiController('catalog/variants/:configurationId/biomarkers')
export class VariantBiomarkerController {
  constructor(private readonly variantsService: VariantsService) {}

  @Post('bulk-upsert')
  @ApiOperation({ summary: 'Upsert biomarker overrides' })
  bulkUpsert(@Param() params: ConfigurationIdParamDto, @Body() body: BulkUpsertBiomarkersDto) {
    return this.variantsService.bulkUpsertBiomarkerOverrides(params.configurationId, body.overrides)
  }

  @Post('delete')
  @ApiOperation({ summary: 'Delete biomarker overrides' })
  delete(@Param() params: ConfigurationIdParamDto, @Body() body: DeleteBiomarkersDto) {
    return this.variantsService.deleteBiomarkerOverrides(params.configurationId, body.hgncIds)
  }
}
