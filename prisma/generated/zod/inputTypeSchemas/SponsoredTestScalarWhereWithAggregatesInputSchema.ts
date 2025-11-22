import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SponsoredTestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SponsoredTestScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SponsoredTestScalarWhereWithAggregatesInputSchema), z.lazy(() => SponsoredTestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsoredTestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsoredTestScalarWhereWithAggregatesInputSchema), z.lazy(() => SponsoredTestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sponsoredProgramId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  labId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  casandraTestId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default SponsoredTestScalarWhereWithAggregatesInputSchema;
