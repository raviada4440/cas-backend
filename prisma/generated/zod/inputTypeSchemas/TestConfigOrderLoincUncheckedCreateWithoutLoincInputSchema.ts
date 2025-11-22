import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUncheckedCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema;
