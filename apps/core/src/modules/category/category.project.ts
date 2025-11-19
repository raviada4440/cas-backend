import { createProjectionOmit } from '@core/shared/utils/schema.util'
import { CategorySchema } from '@db/client/zod'

export const categorySchemaProjection = createProjectionOmit(CategorySchema.shape, [], true)

export const categorySchemaSerializeProjection = createProjectionOmit(CategorySchema.shape, [])
