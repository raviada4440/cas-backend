import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionCptCodeScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema), z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema), z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  cptCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  modifier: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionCptCodeScalarWhereInputSchema;
