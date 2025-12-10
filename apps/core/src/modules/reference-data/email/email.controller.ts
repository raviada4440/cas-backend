import { Body, HttpCode, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { EmailValidationDto } from './email.dto'
import { EmailService } from './email.service'

@Auth()
@ApiTags('Email')
@ApiController('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/validate')
  @ApiOperation({ summary: 'Validate email address' })
  @ApiOkResponse({ description: 'Validation result' })
  @HttpCode(200)
  validate(@Body() body: EmailValidationDto) {
    return this.emailService.validate(body)
  }
}
