import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderIcdListRelationFilterSchema } from './LabOrderIcdListRelationFilterSchema';

export const IcdWhereInputSchema: z.ZodType<Prisma.IcdWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IcdWhereInputSchema), z.lazy(() => IcdWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IcdWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IcdWhereInputSchema), z.lazy(() => IcdWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  shortDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alias1: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alias2: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alias3: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alias4: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdListRelationFilterSchema).optional(),
});

export default IcdWhereInputSchema;
