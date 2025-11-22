import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SponsoredTestListRelationFilterSchema } from './SponsoredTestListRelationFilterSchema';
import { TestCatalogListRelationFilterSchema } from './TestCatalogListRelationFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';

export const LabWhereUniqueInputSchema: z.ZodType<Prisma.LabWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => LabWhereInputSchema), z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabWhereInputSchema), z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  labName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  labCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  zip: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestListRelationFilterSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogListRelationFilterSchema).optional(),
  labOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
}));

export default LabWhereUniqueInputSchema;
