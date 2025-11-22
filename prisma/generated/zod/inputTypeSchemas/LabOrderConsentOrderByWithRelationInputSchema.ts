import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderOrderByWithRelationInputSchema } from './LabOrderOrderByWithRelationInputSchema';
import { TestCatalogVersionConsentOrderByWithRelationInputSchema } from './TestCatalogVersionConsentOrderByWithRelationInputSchema';
import { ConsentTemplateOrderByWithRelationInputSchema } from './ConsentTemplateOrderByWithRelationInputSchema';

export const LabOrderConsentOrderByWithRelationInputSchema: z.ZodType<Prisma.LabOrderConsentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionConsentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  consentTitle: z.lazy(() => SortOrderSchema).optional(),
  consentContent: z.lazy(() => SortOrderSchema).optional(),
  isAccepted: z.lazy(() => SortOrderSchema).optional(),
  acceptedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  declinedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientSignature: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  witnessSignature: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentVersion: z.lazy(() => SortOrderSchema).optional(),
  collectedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collectedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  labOrder: z.lazy(() => LabOrderOrderByWithRelationInputSchema).optional(),
  consent: z.lazy(() => TestCatalogVersionConsentOrderByWithRelationInputSchema).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateOrderByWithRelationInputSchema).optional(),
});

export default LabOrderConsentOrderByWithRelationInputSchema;
