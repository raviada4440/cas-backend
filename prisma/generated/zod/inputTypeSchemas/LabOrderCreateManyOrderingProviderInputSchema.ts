import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LabOrderCreateManyOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderCreateManyOrderingProviderInput> = z.strictObject({
  id: z.string().optional(),
  orderNumber: z.number().optional(),
  accessionNumber: z.number().optional(),
  testVersionId: z.string(),
  testConfigurationId: z.string(),
  labId: z.string().optional().nullable(),
  treatingProviderId: z.string().optional().nullable(),
  patientId: z.string().optional().nullable(),
  patientMRN: z.string().optional().nullable(),
  patientMobile: z.string().optional().nullable(),
  patientEmail: z.string().optional().nullable(),
  organizationId: z.string().optional().nullable(),
  clinicalNotes: z.string().optional().nullable(),
  clinicalDetails: z.string().optional().nullable(),
  clinicalPresentation: z.string().optional().nullable(),
  clinicalTesting: z.string().optional().nullable(),
  riskFlags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  riskFlagNotes: z.string().optional().nullable(),
  clinicalAttachments: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  orderDate: z.date().optional().nullable(),
  orderNotes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderCreateManyOrderingProviderInputSchema;
