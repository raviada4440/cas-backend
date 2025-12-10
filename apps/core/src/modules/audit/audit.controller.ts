import { Get, Param, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { AuditLogListDto, AuditQueryDto, AuditTestIdParamDto } from './audit.dto'
import { AuditService } from './audit.service'

@Auth()
@ApiTags('Audit')
@ApiController('tests')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get('/:testId/audit')
  @ApiOperation({ summary: 'Get audit logs for a catalog test' })
  @ApiOkResponse({ type: AuditLogListDto })
  public getTestAuditLogs(@Param() params: AuditTestIdParamDto, @Query() query: AuditQueryDto) {
    return this.auditService.getTestAuditLogs(params.testId, query)
  }
}
