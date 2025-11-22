import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInputSchema';

export const TestConfigBiomarkerCreateWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateWithoutBiomarkerInput> = z.strictObject({
  id: z.string().optional(),
  action: z.lazy(() => BiomarkerOverrideActionSchema),
  transcriptReference: z.string().optional().nullable(),
  reportTier: z.string().optional().nullable(),
  isReportable: z.boolean().optional().nullable(),
  displayOrder: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInputSchema),
});

export default TestConfigBiomarkerCreateWithoutBiomarkerInputSchema;
