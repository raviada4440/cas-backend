import { createProjectionOmit } from '@core/shared/utils/schema.util'
import { Prisma } from '@db/client'
import { PostSchema } from '@db/client/zod'

export const PostSchemaProjection = createProjectionOmit(PostSchema.shape, [], true)
export const PostSchemaSerializeProjection = createProjectionOmit(PostSchema.shape, [])

export const PostIncluded: Prisma.PostInclude = {
  category: true,
}
