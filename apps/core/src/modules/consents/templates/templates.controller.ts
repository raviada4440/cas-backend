import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { $Enums } from '@db/client'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import {
  CloneConsentTemplateDto,
  ConsentTemplateActiveQueryDto,
  ConsentTemplateIdParamDto,
  ConsentTemplateListQueryDto,
  ConsentTemplateStatsQueryDto,
  CreateConsentTemplateDto,
  UpdateConsentTemplateDto,
} from './templates.dto'
import { TemplatesService } from './templates.service'

@Auth()
@ApiTags('Consents - Templates')
@ApiController('consents/templates')
export class TemplatesController {
  constructor(private readonly service: TemplatesService) {}

  @Post()
  create(@Body() dto: CreateConsentTemplateDto) {
    return this.service.create(dto)
  }

  @Patch(':id')
  update(@Param() params: ConsentTemplateIdParamDto, @Body() dto: UpdateConsentTemplateDto) {
    return this.service.update(params.id, dto)
  }

  @Get(':id')
  findById(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.findById(params.id)
  }

  @Get()
  list(@Query() query: ConsentTemplateListQueryDto) {
    return this.service.list(query)
  }

  @Get('active')
  listActive(@Query() query: ConsentTemplateActiveQueryDto) {
    return this.service.listActive(query)
  }

  @Get('test/:testId')
  listForTest(@Param('testId') testId: string) {
    return this.service.listForTest(testId)
  }

  @Get('configuration/:configurationId')
  listForConfiguration(@Param('configurationId') configurationId: string) {
    return this.service.listForConfiguration(configurationId)
  }

  @Post(':id/approve')
  approve(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.updateStatus(params.id, $Enums.ConsentTemplateStatus.ACTIVE)
  }

  @Post(':id/activate')
  activate(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.updateStatus(params.id, $Enums.ConsentTemplateStatus.ACTIVE)
  }

  @Post(':id/archive')
  archive(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.updateStatus(params.id, $Enums.ConsentTemplateStatus.RETIRED)
  }

  @Post(':id/retire')
  retire(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.retire(params.id)
  }

  @Get('stats')
  stats(@Query() query: ConsentTemplateStatsQueryDto) {
    return this.service.stats(query)
  }

  @Delete(':id')
  remove(@Param() params: ConsentTemplateIdParamDto) {
    return this.service.remove(params.id)
  }

  @Post(':id/clone')
  clone(@Param() params: ConsentTemplateIdParamDto, @Body() dto: CloneConsentTemplateDto) {
    return this.service.clone(params.id, dto)
  }
}
