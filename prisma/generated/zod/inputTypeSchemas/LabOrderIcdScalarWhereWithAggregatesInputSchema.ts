import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LabOrderIcdScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabOrderIcdScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderIcdScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderIcdScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderIcdScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderIcdScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderIcdScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  icdId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default LabOrderIcdScalarWhereWithAggregatesInputSchema;
