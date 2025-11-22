import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincCreateManyLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyLoincInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigOrderLoincCreateManyLoincInputSchema;
