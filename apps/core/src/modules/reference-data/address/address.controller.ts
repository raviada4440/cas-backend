import { Body, HttpCode, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { AddressAutocompleteDto, AddressPlaceDetailsDto, AddressValidationDto } from './address.dto'
import { AddressService } from './address.service'

@Auth()
@ApiTags('Address')
@ApiController(['address', 'reference-data/address'])
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/autocomplete')
  @ApiOperation({ summary: 'Autocomplete address' })
  @ApiOkResponseEnvelope({ description: 'Address suggestions' })
  @HttpCode(200)
  autocomplete(@Body() body: AddressAutocompleteDto) {
    return this.addressService.autocomplete(body)
  }

  @Post('/place')
  @ApiOperation({ summary: 'Resolve address place details' })
  @HttpCode(200)
  resolvePlace(@Body() body: AddressPlaceDetailsDto) {
    return this.addressService.resolvePlace(body)
  }

  @Post('/validate')
  @ApiOperation({ summary: 'Validate an address' })
  @HttpCode(200)
  validate(@Body() body: AddressValidationDto) {
    return this.addressService.validate(body)
  }
}
