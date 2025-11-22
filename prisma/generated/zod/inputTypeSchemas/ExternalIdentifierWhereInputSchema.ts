import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ExternalIdentifierWhereInputSchema: z.ZodType<Prisma.ExternalIdentifierWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ExternalIdentifierWhereInputSchema), z.lazy(() => ExternalIdentifierWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExternalIdentifierWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExternalIdentifierWhereInputSchema), z.lazy(() => ExternalIdentifierWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  resourceType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  system: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default ExternalIdentifierWhereInputSchema;
