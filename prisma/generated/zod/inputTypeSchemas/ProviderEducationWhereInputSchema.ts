import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProviderScalarRelationFilterSchema } from './ProviderScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderEducationWhereInputSchema: z.ZodType<Prisma.ProviderEducationWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderEducationWhereInputSchema), z.lazy(() => ProviderEducationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderEducationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderEducationWhereInputSchema), z.lazy(() => ProviderEducationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerNpi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  educationType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  schoolName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  areaOfEducation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  provider: z.union([ z.lazy(() => ProviderScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional(),
});

export default ProviderEducationWhereInputSchema;
