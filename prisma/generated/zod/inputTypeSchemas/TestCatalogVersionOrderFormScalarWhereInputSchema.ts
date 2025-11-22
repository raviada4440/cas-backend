import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionOrderFormScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  orderFormTemplateId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  displayOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customTitle: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  isVisible: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionOrderFormScalarWhereInputSchema;
