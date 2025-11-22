import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincCreateManyConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigOrderLoincCreateManyConfigurationInputSchema;
