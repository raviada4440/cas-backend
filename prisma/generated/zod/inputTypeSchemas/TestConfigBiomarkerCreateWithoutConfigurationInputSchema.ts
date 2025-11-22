import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { BiomarkerCreateNestedOneWithoutConfigOverridesInputSchema } from './BiomarkerCreateNestedOneWithoutConfigOverridesInputSchema';

export const TestConfigBiomarkerCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  action: z.lazy(() => BiomarkerOverrideActionSchema),
  transcriptReference: z.string().optional().nullable(),
  reportTier: z.string().optional().nullable(),
  isReportable: z.boolean().optional().nullable(),
  displayOrder: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  biomarker: z.lazy(() => BiomarkerCreateNestedOneWithoutConfigOverridesInputSchema),
});

export default TestConfigBiomarkerCreateWithoutConfigurationInputSchema;
