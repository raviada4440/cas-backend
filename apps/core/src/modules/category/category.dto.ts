import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { CategorySchema } from '@db/client/zod'

import { categorySchemaProjection } from './category.project'

const CategoryInputSchema = CategorySchema.omit(categorySchemaProjection)

export class CategoryDto extends createZodDto(CategoryInputSchema) {}

export type CategoryInput = z.infer<typeof CategoryInputSchema>
