import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';
import { ConsentTemplateOrderByWithRelationInputSchema } from './ConsentTemplateOrderByWithRelationInputSchema';
import { LabOrderConsentOrderByRelationAggregateInputSchema } from './LabOrderConsentOrderByRelationAggregateInputSchema';
import { ConsentAuditLogOrderByRelationAggregateInputSchema } from './ConsentAuditLogOrderByRelationAggregateInputSchema';

export const TestCatalogVersionConsentOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentOrderByWithRelationInput> = z.strictObject({
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
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateOrderByWithRelationInputSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentOrderByRelationAggregateInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogOrderByRelationAggregateInputSchema).optional(),
});

export default TestCatalogVersionConsentOrderByWithRelationInputSchema;
