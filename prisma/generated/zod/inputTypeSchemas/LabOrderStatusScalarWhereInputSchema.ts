import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderStatusScalarWhereInputSchema: z.ZodType<Prisma.LabOrderStatusScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderStatusScalarWhereInputSchema), z.lazy(() => LabOrderStatusScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderStatusScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderStatusScalarWhereInputSchema), z.lazy(() => LabOrderStatusScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  statusDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderStatusScalarWhereInputSchema;
