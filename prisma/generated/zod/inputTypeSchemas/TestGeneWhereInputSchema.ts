import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogScalarRelationFilterSchema } from './TestCatalogScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestGeneWhereInputSchema: z.ZodType<Prisma.TestGeneWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestGeneWhereInputSchema), z.lazy(() => TestGeneWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestGeneWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestGeneWhereInputSchema), z.lazy(() => TestGeneWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  gene: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  testCatalog: z.union([ z.lazy(() => TestCatalogScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
});

export default TestGeneWhereInputSchema;
