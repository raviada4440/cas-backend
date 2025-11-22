import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestConfigCptCodeConfigurationIdCptCodeModifierCompoundUniqueInputSchema: z.ZodType<Prisma.TestConfigCptCodeConfigurationIdCptCodeModifierCompoundUniqueInput> = z.strictObject({
  configurationId: z.string(),
  cptCode: z.string(),
  modifier: z.string(),
});

export default TestConfigCptCodeConfigurationIdCptCodeModifierCompoundUniqueInputSchema;
