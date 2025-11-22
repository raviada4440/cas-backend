import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema';

export const TestConfigResultLoincCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema),
});

export default TestConfigResultLoincCreateWithoutLoincInputSchema;
