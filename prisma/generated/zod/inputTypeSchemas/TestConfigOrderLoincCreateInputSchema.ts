import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema';
import { LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema } from './LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema';

export const TestConfigOrderLoincCreateInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema),
});

export default TestConfigOrderLoincCreateInputSchema;
