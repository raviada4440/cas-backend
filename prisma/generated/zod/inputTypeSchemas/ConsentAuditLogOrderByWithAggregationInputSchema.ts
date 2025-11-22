import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ConsentAuditLogCountOrderByAggregateInputSchema } from './ConsentAuditLogCountOrderByAggregateInputSchema';
import { ConsentAuditLogMaxOrderByAggregateInputSchema } from './ConsentAuditLogMaxOrderByAggregateInputSchema';
import { ConsentAuditLogMinOrderByAggregateInputSchema } from './ConsentAuditLogMinOrderByAggregateInputSchema';

export const ConsentAuditLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConsentAuditLogOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  versionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  versionConsentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  fieldName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  oldValue: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  newValue: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  changeReason: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConsentAuditLogCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConsentAuditLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConsentAuditLogMinOrderByAggregateInputSchema).optional(),
});

export default ConsentAuditLogOrderByWithAggregationInputSchema;
