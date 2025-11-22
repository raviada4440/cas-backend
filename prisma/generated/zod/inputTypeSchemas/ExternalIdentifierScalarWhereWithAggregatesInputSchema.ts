import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ExternalIdentifierScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExternalIdentifierScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ExternalIdentifierScalarWhereWithAggregatesInputSchema), z.lazy(() => ExternalIdentifierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExternalIdentifierScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExternalIdentifierScalarWhereWithAggregatesInputSchema), z.lazy(() => ExternalIdentifierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  resourceType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  resourceId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  system: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default ExternalIdentifierScalarWhereWithAggregatesInputSchema;
