import { Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { ReviewerResponseDto } from './review.dto'
import { ReviewService } from './review.service'

@Auth()
@ApiTags('Catalog')
@ApiController('reviewers')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  @ApiOperation({ summary: 'List catalog reviewers' })
  @ApiOkResponse({ type: ReviewerResponseDto, isArray: true })
  async listReviewers() {
    return this.reviewService.listReviewers()
  }
}
