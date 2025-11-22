import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigCptCodeUncheckedCreateInputSchema: z.ZodType<Prisma.TestConfigCptCodeUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  cptCode: z.string(),
  modifier: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigCptCodeUncheckedCreateInputSchema;
