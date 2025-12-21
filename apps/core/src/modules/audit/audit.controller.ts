import { Get, Param, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { AuditLogListDto, AuditQueryDto, AuditTestIdParamDto } from './audit.dto'
import { AuditService } from './audit.service'

@Auth()
@ApiTags('Audit')
@ApiController('tests')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get('/:testId/audit')
  @ApiOperation({ summary: 'Get audit logs for a catalog test' })
  @ApiOkResponseEnvelope(AuditLogListDto)
  public getTestAuditLogs(@Param() params: AuditTestIdParamDto, @Query() query: AuditQueryDto) {
    return this.auditService.getTestAuditLogs(params.testId, query)
  }
}
