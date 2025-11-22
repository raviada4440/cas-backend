import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderIcdScalarWhereInputSchema: z.ZodType<Prisma.LabOrderIcdScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderIcdScalarWhereInputSchema), z.lazy(() => LabOrderIcdScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderIcdScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderIcdScalarWhereInputSchema), z.lazy(() => LabOrderIcdScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  icdId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderIcdScalarWhereInputSchema;
