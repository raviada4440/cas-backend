import { Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { ReviewerResponseDto } from './review.dto'
import { ReviewService } from './review.service'

@Auth()
@ApiTags('Catalog')
@ApiController('reviewers')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  @ApiOperation({ summary: 'List catalog reviewers' })
  @ApiOkResponseEnvelope(ReviewerResponseDto, { isArray: true })
  async listReviewers() {
    return this.reviewService.listReviewers()
  }
}
