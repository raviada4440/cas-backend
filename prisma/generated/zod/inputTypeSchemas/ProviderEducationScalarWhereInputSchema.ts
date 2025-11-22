import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProviderEducationScalarWhereInputSchema: z.ZodType<Prisma.ProviderEducationScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderEducationScalarWhereInputSchema), z.lazy(() => ProviderEducationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderEducationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderEducationScalarWhereInputSchema), z.lazy(() => ProviderEducationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerNpi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  educationType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  schoolName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  areaOfEducation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default ProviderEducationScalarWhereInputSchema;
