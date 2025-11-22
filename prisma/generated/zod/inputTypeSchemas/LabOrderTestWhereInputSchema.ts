import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { TestCatalogNullableScalarRelationFilterSchema } from './TestCatalogNullableScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const LabOrderTestWhereInputSchema: z.ZodType<Prisma.LabOrderTestWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderTestWhereInputSchema), z.lazy(() => LabOrderTestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderTestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderTestWhereInputSchema), z.lazy(() => LabOrderTestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
  testCatalog: z.union([ z.lazy(() => TestCatalogNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional().nullable(),
});

export default LabOrderTestWhereInputSchema;
