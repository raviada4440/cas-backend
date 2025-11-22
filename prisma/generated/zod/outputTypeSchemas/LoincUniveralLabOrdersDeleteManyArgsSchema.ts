import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereInputSchema'

export const LoincUniveralLabOrdersDeleteManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersDeleteManyArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincUniveralLabOrdersDeleteManyArgsSchema;
