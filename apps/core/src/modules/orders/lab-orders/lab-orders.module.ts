import { Module } from '@nestjs/common'

import { LabOrdersController } from './lab-orders.controller'
import { LabOrdersService } from './lab-orders.service'
import { OrderableTestsController } from './orderable-tests.controller'

@Module({
  controllers: [LabOrdersController, OrderableTestsController],
  providers: [LabOrdersService],
  exports: [LabOrdersService],
})
export class LabOrdersModule {}
