import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SponsoredTestScalarWhereInputSchema: z.ZodType<Prisma.SponsoredTestScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SponsoredTestScalarWhereInputSchema), z.lazy(() => SponsoredTestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsoredTestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsoredTestScalarWhereInputSchema), z.lazy(() => SponsoredTestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredProgramId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  casandraTestId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default SponsoredTestScalarWhereInputSchema;
