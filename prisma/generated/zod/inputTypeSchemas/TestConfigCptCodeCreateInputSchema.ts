import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInputSchema';

export const TestConfigCptCodeCreateInputSchema: z.ZodType<Prisma.TestConfigCptCodeCreateInput> = z.strictObject({
  id: z.string().optional(),
  cptCode: z.string(),
  modifier: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInputSchema),
});

export default TestConfigCptCodeCreateInputSchema;
