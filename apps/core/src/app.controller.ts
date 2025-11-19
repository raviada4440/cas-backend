import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Health')
@Controller()
export class AppController {
  @Get(['/ping', '/'])
  @ApiOperation({ summary: 'Health ping endpoint' })
  ping(): 'pong' {
    return 'pong'
  }
}
