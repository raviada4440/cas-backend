import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema';

export const TestConfigOrderLoincCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema),
});

export default TestConfigOrderLoincCreateWithoutLoincInputSchema;
