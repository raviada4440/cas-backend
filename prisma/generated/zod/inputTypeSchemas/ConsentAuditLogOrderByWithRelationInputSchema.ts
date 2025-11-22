import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ConsentTemplateOrderByWithRelationInputSchema } from './ConsentTemplateOrderByWithRelationInputSchema';
import { TestCatalogOrderByWithRelationInputSchema } from './TestCatalogOrderByWithRelationInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { TestCatalogVersionConsentOrderByWithRelationInputSchema } from './TestCatalogVersionConsentOrderByWithRelationInputSchema';

export const ConsentAuditLogOrderByWithRelationInputSchema: z.ZodType<Prisma.ConsentAuditLogOrderByWithRelationInput> = z.strictObject({
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
  consentTemplate: z.lazy(() => ConsentTemplateOrderByWithRelationInputSchema).optional(),
  test: z.lazy(() => TestCatalogOrderByWithRelationInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentOrderByWithRelationInputSchema).optional(),
});

export default ConsentAuditLogOrderByWithRelationInputSchema;
