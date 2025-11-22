import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInput> = z.strictObject({
  configurationId: z.string(),
  hgncId: z.string(),
});

export default TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema;
