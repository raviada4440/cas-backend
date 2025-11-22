import { Body, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { AddressAutocompleteDto, AddressPlaceDetailsDto, AddressValidationDto } from './address.dto'
import { AddressService } from './address.service'

@ApiTags('Address')
@ApiController('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/autocomplete')
  @ApiOperation({ summary: 'Autocomplete address' })
  @ApiOkResponse({ description: 'Address suggestions' })
  autocomplete(@Body() body: AddressAutocompleteDto) {
    return this.addressService.autocomplete(body)
  }

  @Post('/place')
  @ApiOperation({ summary: 'Resolve address place details' })
  resolvePlace(@Body() body: AddressPlaceDetailsDto) {
    return this.addressService.resolvePlace(body)
  }

  @Post('/validate')
  @ApiOperation({ summary: 'Validate an address' })
  validate(@Body() body: AddressValidationDto) {
    return this.addressService.validate(body)
  }
}
