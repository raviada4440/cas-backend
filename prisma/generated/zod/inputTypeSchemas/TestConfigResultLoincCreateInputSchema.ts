import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema';
import { LoincCreateNestedOneWithoutConfigResultLoincsInputSchema } from './LoincCreateNestedOneWithoutConfigResultLoincsInputSchema';

export const TestConfigResultLoincCreateInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutConfigResultLoincsInputSchema),
});

export default TestConfigResultLoincCreateInputSchema;
