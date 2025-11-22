import { Module } from '@nestjs/common'

import { AdminUsersController } from './users.controller'
import { AdminUsersService } from './users.service'

@Module({
  controllers: [AdminUsersController],
  providers: [AdminUsersService],
  exports: [AdminUsersService],
})
export class AdminUsersModule {}
