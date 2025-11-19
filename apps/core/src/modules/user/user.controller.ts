import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { HTTPDecorators } from '@core/common/decorators/http.decorator'
import { Body, HttpCode, Post } from '@nestjs/common'
import { Throttle } from '@nestjs/throttler'
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

import { AuthService } from '../auth/auth.service'
import { UserLoginDto } from './dtos/login.dto'
import { UserRegisterDto } from './dtos/register.dto'
import { UserSchemaSerializeProjection } from './user.protect'
import { UserService } from './user.service'

@ApiTags('Users')
@ApiController(['master', 'user'])
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  @Throttle({
    default: {
      limit: 1,
      ttl: 1_000,
    },
  })
  @HttpCode(200)
  @HTTPDecorators.ProtectKeys(UserSchemaSerializeProjection.keys)
  @ApiOperation({ summary: 'Authenticate with username and password' })
  @ApiOkResponse({ description: 'Returns user info with JWT token' })
  async login(@Body() body: UserLoginDto) {
    const { username, password } = body
    const user = await this.authService.validateUsernameAndPassword(
      username,
      password,
    )
    const jwt = await this.authService.signToken(user.id)

    return {
      auth_token: jwt,
      ...user,
    }
  }

  @Post('/register')
  @HTTPDecorators.ProtectKeys(UserSchemaSerializeProjection.keys)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ description: 'User created and token returned' })
  async register(@Body() body: UserRegisterDto) {
    const newUser = await this.userService.register(body)

    const jwt = await this.authService.signToken(newUser.id)

    return {
      auth_token: jwt,
      ...newUser,
    }
  }
}
