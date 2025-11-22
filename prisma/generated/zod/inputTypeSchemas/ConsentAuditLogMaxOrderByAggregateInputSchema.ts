import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConsentAuditLogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ConsentAuditLogMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  versionConsentId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  fieldName: z.lazy(() => SortOrderSchema).optional(),
  oldValue: z.lazy(() => SortOrderSchema).optional(),
  newValue: z.lazy(() => SortOrderSchema).optional(),
  changeReason: z.lazy(() => SortOrderSchema).optional(),
  performedBy: z.lazy(() => SortOrderSchema).optional(),
  performedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ConsentAuditLogMaxOrderByAggregateInputSchema;
