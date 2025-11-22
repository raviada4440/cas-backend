import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionOrderLoincScalarWhereWithAggregatesInputSchema;
