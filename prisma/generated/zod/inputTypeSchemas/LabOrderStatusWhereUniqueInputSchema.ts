import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusWhereInputSchema } from './LabOrderStatusWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderStatusWhereUniqueInputSchema: z.ZodType<Prisma.LabOrderStatusWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => LabOrderStatusWhereInputSchema), z.lazy(() => LabOrderStatusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderStatusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderStatusWhereInputSchema), z.lazy(() => LabOrderStatusWhereInputSchema).array() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  statusDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
}));

export default LabOrderStatusWhereUniqueInputSchema;
