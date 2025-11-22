import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincCreateManyInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigOrderLoincCreateManyInputSchema;
