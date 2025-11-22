import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersCreateManyInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersCreateManyInputSchema'

export const LoincUniveralLabOrdersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateManyAndReturnArgs> = z.object({
  data: z.union([ LoincUniveralLabOrdersCreateManyInputSchema, LoincUniveralLabOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincUniveralLabOrdersCreateManyAndReturnArgsSchema;
