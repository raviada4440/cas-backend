import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema } from './ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema';
import { ExternalIdentifierWhereInputSchema } from './ExternalIdentifierWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ExternalIdentifierWhereUniqueInputSchema: z.ZodType<Prisma.ExternalIdentifierWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    system_value_resourceType: z.lazy(() => ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    system_value_resourceType: z.lazy(() => ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  system_value_resourceType: z.lazy(() => ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ExternalIdentifierWhereInputSchema), z.lazy(() => ExternalIdentifierWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExternalIdentifierWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExternalIdentifierWhereInputSchema), z.lazy(() => ExternalIdentifierWhereInputSchema).array() ]).optional(),
  resourceType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  system: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
}));

export default ExternalIdentifierWhereUniqueInputSchema;
