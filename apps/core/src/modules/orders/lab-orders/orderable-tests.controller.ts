import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Get, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { OrderableQueryDto } from './orderable-tests.dto'
import { LabOrdersService } from './lab-orders.service'

@ApiTags('Orders - Orderable Tests')
@ApiController('orderable-tests')
export class OrderableTestsController {
  constructor(private readonly labOrdersService: LabOrdersService) {}

  @Get('/')
  @ApiOperation({ summary: 'List orderable tests' })
  list(@Query() query: OrderableQueryDto) {
    return this.labOrdersService.listOrderableTests(query)
  }
}
