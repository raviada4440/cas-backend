import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LoincCountOutputTypeSelectSchema: z.ZodType<Prisma.LoincCountOutputTypeSelect> = z.object({
  testOrderLoincs: z.boolean().optional(),
  testResultLoincs: z.boolean().optional(),
  configOrderLoincs: z.boolean().optional(),
  configResultLoincs: z.boolean().optional(),
}).strict();

export default LoincCountOutputTypeSelectSchema;
