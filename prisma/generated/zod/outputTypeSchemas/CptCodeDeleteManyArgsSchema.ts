import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'

export const CptCodeDeleteManyArgsSchema: z.ZodType<Prisma.CptCodeDeleteManyArgs> = z.object({
  where: CptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CptCodeDeleteManyArgsSchema;
