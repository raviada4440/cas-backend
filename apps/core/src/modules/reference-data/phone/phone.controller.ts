import { Body, HttpCode, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { PhoneValidationDto } from './phone.dto'
import { PhoneService } from './phone.service'

@Auth()
@ApiTags('Phone')
@ApiController('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('/validate')
  @ApiOperation({ summary: 'Validate phone number' })
  @ApiOkResponse({ description: 'Validation result' })
  @HttpCode(200)
  validate(@Body() body: PhoneValidationDto) {
    return this.phoneService.validate(body)
  }
}
