import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogConfigurationNullableScalarRelationFilterSchema } from './TestCatalogConfigurationNullableScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { OrderFormTemplateScalarRelationFilterSchema } from './OrderFormTemplateScalarRelationFilterSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';
import { LabOrderFormListRelationFilterSchema } from './LabOrderFormListRelationFilterSchema';

export const TestCatalogVersionOrderFormWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).array() ]).optional(),
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
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional().nullable(),
  template: z.union([ z.lazy(() => OrderFormTemplateScalarRelationFilterSchema), z.lazy(() => OrderFormTemplateWhereInputSchema) ]).optional(),
  labOrderForms: z.lazy(() => LabOrderFormListRelationFilterSchema).optional(),
});

export default TestCatalogVersionOrderFormWhereInputSchema;
