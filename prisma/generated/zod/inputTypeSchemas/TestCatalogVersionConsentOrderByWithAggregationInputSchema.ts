import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionConsentCountOrderByAggregateInputSchema } from './TestCatalogVersionConsentCountOrderByAggregateInputSchema';
import { TestCatalogVersionConsentAvgOrderByAggregateInputSchema } from './TestCatalogVersionConsentAvgOrderByAggregateInputSchema';
import { TestCatalogVersionConsentMaxOrderByAggregateInputSchema } from './TestCatalogVersionConsentMaxOrderByAggregateInputSchema';
import { TestCatalogVersionConsentMinOrderByAggregateInputSchema } from './TestCatalogVersionConsentMinOrderByAggregateInputSchema';
import { TestCatalogVersionConsentSumOrderByAggregateInputSchema } from './TestCatalogVersionConsentSumOrderByAggregateInputSchema';

export const TestCatalogVersionConsentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  customTitle: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customContent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  conditionalLogic: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  dependsOnConsent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionConsentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogVersionConsentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionConsentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionConsentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogVersionConsentSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionConsentOrderByWithAggregationInputSchema;
