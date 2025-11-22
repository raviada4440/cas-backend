import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutConsentsInputSchema } from './LabOrderCreateNestedOneWithoutConsentsInputSchema';
import { ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema';

export const LabOrderConsentCreateWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentCreateWithoutConsentInput> = z.strictObject({
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
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutConsentsInputSchema),
  consentTemplate: z.lazy(() => ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema),
});

export default LabOrderConsentCreateWithoutConsentInputSchema;
