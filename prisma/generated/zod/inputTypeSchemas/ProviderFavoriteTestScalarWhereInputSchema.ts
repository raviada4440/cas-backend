import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProviderFavoriteTestScalarWhereInputSchema: z.ZodType<Prisma.ProviderFavoriteTestScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema), z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema), z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentName: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default ProviderFavoriteTestScalarWhereInputSchema;
