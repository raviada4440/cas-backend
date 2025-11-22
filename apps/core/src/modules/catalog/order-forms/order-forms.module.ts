import { Module } from '@nestjs/common'

import { OrderFormsController } from './order-forms.controller'
import { OrderFormsService } from './order-forms.service'

@Module({
  controllers: [OrderFormsController],
  providers: [OrderFormsService],
  exports: [OrderFormsService],
})
export class OrderFormsModule {}
