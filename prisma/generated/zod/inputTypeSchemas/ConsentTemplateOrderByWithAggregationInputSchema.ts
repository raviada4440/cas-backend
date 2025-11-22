import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ConsentTemplateCountOrderByAggregateInputSchema } from './ConsentTemplateCountOrderByAggregateInputSchema';
import { ConsentTemplateAvgOrderByAggregateInputSchema } from './ConsentTemplateAvgOrderByAggregateInputSchema';
import { ConsentTemplateMaxOrderByAggregateInputSchema } from './ConsentTemplateMaxOrderByAggregateInputSchema';
import { ConsentTemplateMinOrderByAggregateInputSchema } from './ConsentTemplateMinOrderByAggregateInputSchema';
import { ConsentTemplateSumOrderByAggregateInputSchema } from './ConsentTemplateSumOrderByAggregateInputSchema';

export const ConsentTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConsentTemplateOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentType: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  legalText: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  formSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  retiredDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isGlobal: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConsentTemplateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ConsentTemplateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConsentTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConsentTemplateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ConsentTemplateSumOrderByAggregateInputSchema).optional(),
});

export default ConsentTemplateOrderByWithAggregationInputSchema;
