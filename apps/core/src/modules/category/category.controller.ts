import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Body, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { CategoryDto } from './category.dto'
import { CategoryService } from './category.service'

@ApiTags('Categories')
@ApiController('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Post('/')
  // @Auth()
  @ApiOperation({ summary: 'Create a category' })
  @ApiCreatedResponse({ description: 'Category created' })
  async createCategory(@Body() body: CategoryDto) {
    return this.service.create(body)
  }
}
