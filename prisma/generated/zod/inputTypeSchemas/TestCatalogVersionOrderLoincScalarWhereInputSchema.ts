import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionOrderLoincScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionOrderLoincScalarWhereInputSchema;
