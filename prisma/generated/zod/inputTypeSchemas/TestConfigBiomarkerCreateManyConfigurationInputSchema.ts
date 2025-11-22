import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';

export const TestConfigBiomarkerCreateManyConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateManyConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  hgncId: z.string(),
  action: z.lazy(() => BiomarkerOverrideActionSchema),
  transcriptReference: z.string().optional().nullable(),
  reportTier: z.string().optional().nullable(),
  isReportable: z.boolean().optional().nullable(),
  displayOrder: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigBiomarkerCreateManyConfigurationInputSchema;
