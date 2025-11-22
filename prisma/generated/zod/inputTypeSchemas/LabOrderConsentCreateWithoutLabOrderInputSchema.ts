import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInputSchema } from './TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema';

export const LabOrderConsentCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  consentTitle: z.string(),
  consentContent: z.string(),
  isAccepted: z.boolean(),
  acceptedAt: z.date().optional().nullable(),
  declinedAt: z.date().optional().nullable(),
  patientSignature: z.string().optional().nullable(),
  witnessSignature: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  consentVersion: z.number().optional(),
  collectedBy: z.string().optional().nullable(),
  collectedAt: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  consent: z.lazy(() => TestCatalogVersionConsentCreateNestedOneWithoutLabOrderConsentsInputSchema).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema),
});

export default LabOrderConsentCreateWithoutLabOrderInputSchema;
