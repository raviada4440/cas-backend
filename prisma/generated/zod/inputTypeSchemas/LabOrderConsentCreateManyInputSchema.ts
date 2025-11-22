import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderConsentCreateManyInputSchema: z.ZodType<Prisma.LabOrderConsentCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string(),
  versionConsentId: z.string().optional().nullable(),
  consentTemplateId: z.string(),
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
});

export default LabOrderConsentCreateManyInputSchema;
