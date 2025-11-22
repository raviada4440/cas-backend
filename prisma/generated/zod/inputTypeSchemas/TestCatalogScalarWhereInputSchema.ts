import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTestCatalogStatusFilterSchema } from './EnumTestCatalogStatusFilterSchema';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema), z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema), z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  casandraTestId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testSubCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTestCatalogStatusFilterSchema), z.lazy(() => TestCatalogStatusSchema) ]).optional(),
  defaultVersionId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  currentVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogScalarWhereInputSchema;
