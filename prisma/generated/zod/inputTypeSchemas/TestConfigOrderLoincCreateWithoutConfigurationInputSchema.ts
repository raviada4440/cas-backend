import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema } from './LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema';

export const TestConfigOrderLoincCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema),
});

export default TestConfigOrderLoincCreateWithoutConfigurationInputSchema;
