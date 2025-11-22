import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeUncheckedCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  cptCode: z.string(),
  modifier: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema;
