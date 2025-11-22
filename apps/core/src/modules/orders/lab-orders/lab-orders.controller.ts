import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  CreateLabOrderDto,
  LabOrderIdParamDto,
  LabOrderSearchQueryDto,
  UpdateLabOrderDto,
  UpdateLabOrderStatusDto,
} from './lab-orders.dto'
import { LabOrdersService } from './lab-orders.service'

@ApiTags('Orders - Lab Orders')
@ApiController('laborders')
export class LabOrdersController {
  constructor(private readonly labOrdersService: LabOrdersService) {}

  @Get('/')
  @ApiOperation({ summary: 'List lab orders' })
  list(@Query() query: LabOrderSearchQueryDto) {
    return this.labOrdersService.list(query)
  }

  @Get('/:labOrderId')
  @ApiOperation({ summary: 'Get lab order detail' })
  detail(@Param() params: LabOrderIdParamDto) {
    return this.labOrdersService.detail(params.labOrderId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a lab order' })
  create(@Body() body: CreateLabOrderDto) {
    return this.labOrdersService.create(body)
  }

  @Put('/:labOrderId')
  @ApiOperation({ summary: 'Update a lab order' })
  update(@Param() params: LabOrderIdParamDto, @Body() body: UpdateLabOrderDto) {
    return this.labOrdersService.update(params.labOrderId, body)
  }

  @Patch('/:labOrderId/status')
  @ApiOperation({ summary: 'Append a lab order status entry' })
  updateStatus(@Param() params: LabOrderIdParamDto, @Body() body: UpdateLabOrderStatusDto) {
    return this.labOrdersService.updateStatus(params.labOrderId, body.status)
  }

  @Delete('/:labOrderId')
  @ApiOperation({ summary: 'Delete a lab order' })
  @ApiOkResponse({ description: 'Deletion success flag' })
  delete(@Param() params: LabOrderIdParamDto) {
    return this.labOrdersService.delete(params.labOrderId)
  }
}
