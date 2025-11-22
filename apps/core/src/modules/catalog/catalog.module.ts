import { Module } from '@nestjs/common'

import { OrderFormsModule } from './order-forms/order-forms.module'
import { TestsModule } from './tests/tests.module'
import { VariantsModule } from './variants/variants.module'

@Module({
  imports: [TestsModule, VariantsModule, OrderFormsModule],
  exports: [TestsModule, VariantsModule, OrderFormsModule],
})
export class CatalogModule {}
