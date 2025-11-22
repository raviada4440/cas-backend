import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  cptCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  modifier: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  isPrimary: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionCptCodeScalarWhereWithAggregatesInputSchema;
