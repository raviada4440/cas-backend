import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  AssignVersionConsentDto,
  ReorderVersionConsentsDto,
  UpdateVersionConsentDto,
  VersionConsentIdParamDto,
  VersionIdParamDto,
} from './consents.dto'
import { ConsentsService } from './consents.service'

@ApiTags('Consents')
@ApiController('consents')
export class ConsentsController {
  constructor(private readonly service: ConsentsService) {}

  @Get('versions/:versionId')
  @ApiOperation({ summary: 'List consents assigned to a catalog version' })
  listForVersion(@Param() params: VersionIdParamDto) {
    return this.service.listVersionConsents(params.versionId)
  }

  @Post('versions/:versionId')
  @ApiOperation({ summary: 'Assign a consent template to a catalog version' })
  assign(@Param() params: VersionIdParamDto, @Body() body: AssignVersionConsentDto) {
    return this.service.assignVersionConsent(params.versionId, body)
  }

  @Post('versions/:versionId/reorder')
  @ApiOperation({ summary: 'Reorder consents for a catalog version' })
  reorder(@Param() params: VersionIdParamDto, @Body() body: ReorderVersionConsentsDto) {
    return this.service.reorderVersionConsents(params.versionId, body)
  }

  @Put('version-consents/:versionConsentId')
  @ApiOperation({ summary: 'Update an assigned consent' })
  update(@Param() params: VersionConsentIdParamDto, @Body() body: UpdateVersionConsentDto) {
    return this.service.updateVersionConsent(params.versionConsentId, body)
  }

  @Delete('version-consents/:versionConsentId')
  @ApiOperation({ summary: 'Remove a consent assignment' })
  remove(@Param() params: VersionConsentIdParamDto) {
    return this.service.removeVersionConsent(params.versionConsentId)
  }
}
