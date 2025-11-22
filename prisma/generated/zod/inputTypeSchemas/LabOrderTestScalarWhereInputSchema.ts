import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderTestScalarWhereInputSchema: z.ZodType<Prisma.LabOrderTestScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderTestScalarWhereInputSchema), z.lazy(() => LabOrderTestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderTestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderTestScalarWhereInputSchema), z.lazy(() => LabOrderTestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderTestScalarWhereInputSchema;
