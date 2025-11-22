import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogConfigurationCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  configurationName: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  dimension: z.lazy(() => SortOrderSchema).optional(),
  dimensionValue: z.lazy(() => SortOrderSchema).optional(),
  operationalCode: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  customTestName: z.lazy(() => SortOrderSchema).optional(),
  customDescription: z.lazy(() => SortOrderSchema).optional(),
  customTurnAroundTime: z.lazy(() => SortOrderSchema).optional(),
  customPricing: z.lazy(() => SortOrderSchema).optional(),
  customInstructions: z.lazy(() => SortOrderSchema).optional(),
  customSpecimenRequirements: z.lazy(() => SortOrderSchema).optional(),
  customCollectionMethod: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.lazy(() => SortOrderSchema).optional(),
  expirationDate: z.lazy(() => SortOrderSchema).optional(),
  lastActivatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastDeactivatedAt: z.lazy(() => SortOrderSchema).optional(),
  requiresConsent: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateIds: z.lazy(() => SortOrderSchema).optional(),
  customConsentText: z.lazy(() => SortOrderSchema).optional(),
  requiresApproval: z.lazy(() => SortOrderSchema).optional(),
  approvalWorkflowId: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogConfigurationCountOrderByAggregateInputSchema;
