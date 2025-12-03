import { Module } from '@nestjs/common'

import { DatabaseModule } from '@core/processors/database/database.module'

import { RolesController } from './roles.controller'
import { RolesService } from './roles.service'

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class AdminRolesModule {}
