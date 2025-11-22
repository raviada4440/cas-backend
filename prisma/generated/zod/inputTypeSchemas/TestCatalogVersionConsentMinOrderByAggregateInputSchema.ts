import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionConsentMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  customTitle: z.lazy(() => SortOrderSchema).optional(),
  customContent: z.lazy(() => SortOrderSchema).optional(),
  conditionalLogic: z.lazy(() => SortOrderSchema).optional(),
  dependsOnConsent: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionConsentMinOrderByAggregateInputSchema;
