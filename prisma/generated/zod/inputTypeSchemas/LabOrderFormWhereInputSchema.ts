import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderScalarRelationFilterSchema } from './LabOrderScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { TestCatalogVersionOrderFormNullableScalarRelationFilterSchema } from './TestCatalogVersionOrderFormNullableScalarRelationFilterSchema';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';
import { OrderFormTemplateNullableScalarRelationFilterSchema } from './OrderFormTemplateNullableScalarRelationFilterSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';

export const LabOrderFormWhereInputSchema: z.ZodType<Prisma.LabOrderFormWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderFormWhereInputSchema), z.lazy(() => LabOrderFormWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderFormWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderFormWhereInputSchema), z.lazy(() => LabOrderFormWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionOrderFormId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  orderFormTemplateId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  sectionName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  templateName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  formSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  layoutSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  responses: z.lazy(() => JsonNullableFilterSchema).optional(),
  isCompleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  versionOrderForm: z.union([ z.lazy(() => TestCatalogVersionOrderFormNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema) ]).optional().nullable(),
  template: z.union([ z.lazy(() => OrderFormTemplateNullableScalarRelationFilterSchema), z.lazy(() => OrderFormTemplateWhereInputSchema) ]).optional().nullable(),
});

export default LabOrderFormWhereInputSchema;
