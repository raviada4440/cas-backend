import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema: z.ZodType<Prisma.TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInput> = z.strictObject({
  configurationId: z.string(),
  loincCode: z.string(),
});

export default TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema;
