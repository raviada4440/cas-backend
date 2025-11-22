import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumTestCatalogStatusWithAggregatesFilterSchema } from './EnumTestCatalogStatusWithAggregatesFilterSchema';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestCatalogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestCatalogScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema), z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  labId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  casandraTestId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  testName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  specialNotes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  testCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  testSubCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTestCatalogStatusWithAggregatesFilterSchema), z.lazy(() => TestCatalogStatusSchema) ]).optional(),
  defaultVersionId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  currentVersion: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestCatalogScalarWhereWithAggregatesInputSchema;
