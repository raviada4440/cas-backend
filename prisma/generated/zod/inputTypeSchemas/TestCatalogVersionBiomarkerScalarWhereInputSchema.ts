import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionBiomarkerScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionBiomarkerScalarWhereInputSchema;
