import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrderFormSectionOrderByWithRelationInputSchema } from './OrderFormSectionOrderByWithRelationInputSchema';
import { OrganizationOrderByWithRelationInputSchema } from './OrganizationOrderByWithRelationInputSchema';
import { TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema } from './TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema';
import { LabOrderFormOrderByRelationAggregateInputSchema } from './LabOrderFormOrderByRelationAggregateInputSchema';

export const OrderFormTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderFormTemplateOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderFormSectionId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  retiredDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  formSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  layoutSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isGlobal: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  section: z.lazy(() => OrderFormSectionOrderByWithRelationInputSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema).optional(),
  labOrderForms: z.lazy(() => LabOrderFormOrderByRelationAggregateInputSchema).optional(),
});

export default OrderFormTemplateOrderByWithRelationInputSchema;
