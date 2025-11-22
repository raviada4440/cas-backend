import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { IcdNullableScalarRelationFilterSchema } from './IcdNullableScalarRelationFilterSchema';
import { IcdWhereInputSchema } from './IcdWhereInputSchema';

export const LabOrderIcdWhereInputSchema: z.ZodType<Prisma.LabOrderIcdWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderIcdWhereInputSchema), z.lazy(() => LabOrderIcdWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderIcdWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderIcdWhereInputSchema), z.lazy(() => LabOrderIcdWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  icdId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
  icd: z.union([ z.lazy(() => IcdNullableScalarRelationFilterSchema), z.lazy(() => IcdWhereInputSchema) ]).optional().nullable(),
});

export default LabOrderIcdWhereInputSchema;
