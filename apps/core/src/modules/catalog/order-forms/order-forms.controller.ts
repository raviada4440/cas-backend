import { Body, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import {
  AssignOrderFormsDto,
  CreateOrderFormSectionDto,
  CreateOrderFormTemplateDto,
  UpdateOrderFormSectionDto,
  UpdateOrderFormTemplateDto,
} from './order-forms.dto'
import { OrderFormsService } from './order-forms.service'

@Auth()
@ApiTags('Catalog - Order Forms')
@ApiController()
export class OrderFormsController {
  constructor(private readonly orderFormsService: OrderFormsService) {}

  @Get('order-forms/sections')
  @ApiOperation({ summary: 'List order form sections' })
  listSections() {
    return this.orderFormsService.listSections()
  }

  @Post('order-forms/sections')
  @ApiOperation({ summary: 'Create order form section' })
  createSection(@Body() body: CreateOrderFormSectionDto) {
    return this.orderFormsService.createSection(body)
  }

  @Put('order-forms/sections/:sectionId')
  @ApiOperation({ summary: 'Update order form section' })
  updateSection(@Param('sectionId') sectionId: string, @Body() body: UpdateOrderFormSectionDto) {
    return this.orderFormsService.updateSection(sectionId, body)
  }

  @Get('order-forms/templates')
  @ApiOperation({ summary: 'List order form templates' })
  listTemplates(@Query('sectionId') sectionId?: string, @Query('status') status?: string) {
    return this.orderFormsService.listTemplates({ sectionId, status })
  }

  @Post('order-forms/templates')
  @ApiOperation({ summary: 'Create order form template' })
  createTemplate(@Body() body: CreateOrderFormTemplateDto) {
    return this.orderFormsService.createTemplate(body)
  }

  @Get('order-forms/templates/:templateId')
  @ApiOperation({ summary: 'Get order form template' })
  getTemplate(@Param('templateId') templateId: string) {
    return this.orderFormsService.getTemplate(templateId)
  }

  @Put('order-forms/templates/:templateId')
  @ApiOperation({ summary: 'Update order form template' })
  updateTemplate(
    @Param('templateId') templateId: string,
    @Body() body: UpdateOrderFormTemplateDto,
  ) {
    return this.orderFormsService.updateTemplate(templateId, body)
  }

  @Get('catalog/tests/:testId/order-forms')
  @ApiOperation({ summary: 'Get order form assignments for a test version' })
  getAssignments(
    @Param('testId') testId: string,
    @Query('versionId') versionId: string,
    @Query('configurationId') configurationId?: string,
  ) {
    return this.orderFormsService.getAssignments(testId, versionId, configurationId)
  }

  @Post('catalog/tests/:testId/order-forms')
  @ApiOperation({ summary: 'Assign order forms to a test version' })
  @ApiOkResponseEnvelope({ description: 'Updated assignments' })
  assign(@Param('testId') testId: string, @Body() body: AssignOrderFormsDto) {
    return this.orderFormsService.assign(testId, body)
  }
}
