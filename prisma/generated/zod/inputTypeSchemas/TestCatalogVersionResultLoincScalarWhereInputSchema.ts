import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionResultLoincScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  resultCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  uom: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionResultLoincScalarWhereInputSchema;
