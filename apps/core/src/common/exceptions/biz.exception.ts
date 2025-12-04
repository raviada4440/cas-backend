import { ErrorCode, ErrorCodeEnum } from '@core/constants/error-code.constant'
import { HttpException, HttpStatus } from '@nestjs/common'

export class BizException extends HttpException {
  constructor(code: ErrorCodeEnum) {
    const descriptor = ErrorCode[code]
    const messageKey = descriptor?.key ?? 'errors.biz_exception'
    const status = descriptor?.status ?? HttpStatus.BAD_REQUEST

    super({ code, messageKey }, status)
  }
}
