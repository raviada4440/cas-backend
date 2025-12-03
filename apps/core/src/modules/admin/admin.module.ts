import { Module } from '@nestjs/common'

import { AdminRolesModule } from './roles/roles.module'
import { AdminUsersModule } from './users/users.module'

@Module({
  imports: [AdminUsersModule, AdminRolesModule],
})
export class AdminModule {}
