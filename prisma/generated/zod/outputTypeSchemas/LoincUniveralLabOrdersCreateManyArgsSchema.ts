import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersCreateManyInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersCreateManyInputSchema'

export const LoincUniveralLabOrdersCreateManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateManyArgs> = z.object({
  data: z.union([ LoincUniveralLabOrdersCreateManyInputSchema, LoincUniveralLabOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincUniveralLabOrdersCreateManyArgsSchema;
