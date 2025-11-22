import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateNestedOneWithoutConfigResultLoincsInputSchema } from './LoincCreateNestedOneWithoutConfigResultLoincsInputSchema';

export const TestConfigResultLoincCreateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateWithoutConfigurationInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutConfigResultLoincsInputSchema),
});

export default TestConfigResultLoincCreateWithoutConfigurationInputSchema;
