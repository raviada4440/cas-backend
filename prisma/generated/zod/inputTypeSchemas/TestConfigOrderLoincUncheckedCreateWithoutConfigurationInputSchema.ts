import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUncheckedCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema;
