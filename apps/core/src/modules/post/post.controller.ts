import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { SnowflakeIdDto } from '@core/shared/dto/id.dto'
import { PagerDto } from '@core/shared/dto/pager.dto'
import { Body, Get, Param, Post, Query } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { PostDto } from './post.dto'
import { PostService } from './post.service'

@ApiTags('Posts')
@ApiController('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get('/')
  @ApiOperation({ summary: 'Paginate posts' })
  @ApiOkResponse({ description: 'List of posts with pagination data' })
  async gets(@Query() query: PagerDto) {
    const paginate = await this.service.paginatePosts(query)
    return paginate
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a post by id' })
  @ApiOkResponse({ description: 'Post with the given id' })
  async get(@Param() param: SnowflakeIdDto) {
    const { id } = param
    return this.service.getPostById(id)
  }

  @Post('/')
  // @Auth()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiCreatedResponse({ description: 'Post created' })
  async create(@Body() body: PostDto) {
    return this.service.create(body)
  }

  @Get('/*')
  @ApiOperation({ summary: 'Fallback route for unmatched post paths' })
  async notFound() {
    throw new BizException(ErrorCodeEnum.PostNotFound)
  }
}
