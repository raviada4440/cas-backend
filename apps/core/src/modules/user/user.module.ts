import { Global, Module } from '@nestjs/common'

import { UserService } from './user.service'

@Module({
  providers: [UserService],
  exports: [UserService],
})
@Global()
export class UserModule {}
