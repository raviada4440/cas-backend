import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerWhereInputSchema } from '../inputTypeSchemas/BiomarkerWhereInputSchema'

export const BiomarkerDeleteManyArgsSchema: z.ZodType<Prisma.BiomarkerDeleteManyArgs> = z.object({
  where: BiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BiomarkerDeleteManyArgsSchema;
