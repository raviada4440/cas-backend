import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';

export const TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  action: z.lazy(() => BiomarkerOverrideActionSchema),
  transcriptReference: z.string().optional().nullable(),
  reportTier: z.string().optional().nullable(),
  isReportable: z.boolean().optional().nullable(),
  displayOrder: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema;
