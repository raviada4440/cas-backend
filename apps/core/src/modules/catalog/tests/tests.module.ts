import { Module } from '@nestjs/common'

import { TestsController } from './tests.controller'
import { TestVersionsController } from './tests-versions.controller'
import { TestsService } from './tests.service'

@Module({
  controllers: [TestsController, TestVersionsController],
  providers: [TestsService],
  exports: [TestsService],
})
export class TestsModule {}
