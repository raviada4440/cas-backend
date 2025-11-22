import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionConsentOrderByRelationAggregateInputSchema } from './TestCatalogVersionConsentOrderByRelationAggregateInputSchema';
import { LabOrderConsentOrderByRelationAggregateInputSchema } from './LabOrderConsentOrderByRelationAggregateInputSchema';
import { ConsentAuditLogOrderByRelationAggregateInputSchema } from './ConsentAuditLogOrderByRelationAggregateInputSchema';

export const ConsentTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.ConsentTemplateOrderByWithRelationInput> = z.strictObject({
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
  versionConsents: z.lazy(() => TestCatalogVersionConsentOrderByRelationAggregateInputSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentOrderByRelationAggregateInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogOrderByRelationAggregateInputSchema).optional(),
});

export default ConsentTemplateOrderByWithRelationInputSchema;
