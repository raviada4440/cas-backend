import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogConfigurationCountOrderByAggregateInputSchema } from './TestCatalogConfigurationCountOrderByAggregateInputSchema';
import { TestCatalogConfigurationAvgOrderByAggregateInputSchema } from './TestCatalogConfigurationAvgOrderByAggregateInputSchema';
import { TestCatalogConfigurationMaxOrderByAggregateInputSchema } from './TestCatalogConfigurationMaxOrderByAggregateInputSchema';
import { TestCatalogConfigurationMinOrderByAggregateInputSchema } from './TestCatalogConfigurationMinOrderByAggregateInputSchema';
import { TestCatalogConfigurationSumOrderByAggregateInputSchema } from './TestCatalogConfigurationSumOrderByAggregateInputSchema';

export const TestCatalogConfigurationOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogConfigurationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  configurationName: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  dimensionValue: z.lazy(() => SortOrderSchema).optional(),
  operationalCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  customTestName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customDescription: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customTurnAroundTime: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customPricing: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customInstructions: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customSpecimenRequirements: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  customCollectionMethod: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  effectiveDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  expirationDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastActivatedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastDeactivatedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  requiresConsent: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateIds: z.lazy(() => SortOrderSchema).optional(),
  customConsentText: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  requiresApproval: z.lazy(() => SortOrderSchema).optional(),
  approvalWorkflowId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogConfigurationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogConfigurationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogConfigurationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogConfigurationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogConfigurationSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogConfigurationOrderByWithAggregationInputSchema;
