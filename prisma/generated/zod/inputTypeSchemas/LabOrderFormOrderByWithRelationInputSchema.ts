import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderOrderByWithRelationInputSchema } from './LabOrderOrderByWithRelationInputSchema';
import { TestCatalogVersionOrderFormOrderByWithRelationInputSchema } from './TestCatalogVersionOrderFormOrderByWithRelationInputSchema';
import { OrderFormTemplateOrderByWithRelationInputSchema } from './OrderFormTemplateOrderByWithRelationInputSchema';

export const LabOrderFormOrderByWithRelationInputSchema: z.ZodType<Prisma.LabOrderFormOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionOrderFormId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderFormTemplateId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  sectionName: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  formSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  layoutSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  responses: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isCompleted: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  labOrder: z.lazy(() => LabOrderOrderByWithRelationInputSchema).optional(),
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormOrderByWithRelationInputSchema).optional(),
  template: z.lazy(() => OrderFormTemplateOrderByWithRelationInputSchema).optional(),
});

export default LabOrderFormOrderByWithRelationInputSchema;
