import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema: z.ZodType<Prisma.TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInput> = z.strictObject({
  configurationId: z.string(),
  loincCode: z.string(),
});

export default TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema;
