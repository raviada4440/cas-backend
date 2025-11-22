import { Body, Get, Param, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  UpdateVersionBiomarkersDto,
  UpdateVersionCptCodesDto,
  UpdateVersionLoincCodesDto,
  UpdateVersionSpecimensDto,
  VersionTypeQueryDto,
} from './tests.dto'
import { TestsService } from './tests.service'

@ApiTags('Catalog - Test Versions')
@ApiController('versions')
export class TestVersionsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/:versionId/cpt-codes')
  @ApiOperation({ summary: 'Get version CPT codes' })
  getVersionCptCodes(@Param('versionId') versionId: string) {
    return this.testsService.getVersionCptCodesByVersion(versionId)
  }

  @Put('/:versionId/cpt-codes')
  @ApiOperation({ summary: 'Update version CPT codes' })
  updateVersionCptCodes(
    @Param('versionId') versionId: string,
    @Body() body: UpdateVersionCptCodesDto,
  ) {
    return this.testsService.updateVersionCptCodesByVersion(versionId, body)
  }

  @Get('/:versionId/loinc-codes')
  @ApiOperation({ summary: 'Get version LOINC codes' })
  getVersionLoincCodes(@Param('versionId') versionId: string, @Query() query: VersionTypeQueryDto) {
    const type = query.type ?? 'ORDER'
    return this.testsService.getVersionLoincCodesByVersion(versionId, type)
  }

  @Put('/:versionId/loinc-codes')
  @ApiOperation({ summary: 'Update version LOINC codes' })
  updateVersionLoincCodes(
    @Param('versionId') versionId: string,
    @Body() body: UpdateVersionLoincCodesDto,
  ) {
    return this.testsService.updateVersionLoincCodesByVersion(versionId, body)
  }

  @Get('/:versionId/biomarkers')
  @ApiOperation({ summary: 'Get version biomarkers' })
  getVersionBiomarkers(@Param('versionId') versionId: string) {
    return this.testsService.getVersionBiomarkersByVersion(versionId)
  }

  @Put('/:versionId/biomarkers')
  @ApiOperation({ summary: 'Update version biomarkers' })
  updateVersionBiomarkers(
    @Param('versionId') versionId: string,
    @Body() body: UpdateVersionBiomarkersDto,
  ) {
    return this.testsService.updateVersionBiomarkersByVersion(versionId, body)
  }

  @Get('/:versionId/specimens')
  @ApiOperation({ summary: 'Get version specimens' })
  getVersionSpecimens(@Param('versionId') versionId: string) {
    return this.testsService.getVersionSpecimensByVersion(versionId)
  }

  @Put('/:versionId/specimens')
  @ApiOperation({ summary: 'Update version specimens' })
  updateVersionSpecimens(
    @Param('versionId') versionId: string,
    @Body() body: UpdateVersionSpecimensDto,
  ) {
    return this.testsService.updateVersionSpecimensByVersion(versionId, body)
  }
}
