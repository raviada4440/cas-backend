import { Body, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { PhoneValidationDto } from './phone.dto'
import { PhoneService } from './phone.service'

@ApiTags('Phone')
@ApiController('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('/validate')
  @ApiOperation({ summary: 'Validate phone number' })
  @ApiOkResponse({ description: 'Validation result' })
  validate(@Body() body: PhoneValidationDto) {
    return this.phoneService.validate(body)
  }
}
