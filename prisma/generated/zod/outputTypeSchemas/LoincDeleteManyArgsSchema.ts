import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincWhereInputSchema } from '../inputTypeSchemas/LoincWhereInputSchema'

export const LoincDeleteManyArgsSchema: z.ZodType<Prisma.LoincDeleteManyArgs> = z.object({
  where: LoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincDeleteManyArgsSchema;
