import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabWhereInputSchema } from '../inputTypeSchemas/LabWhereInputSchema'

export const LabDeleteManyArgsSchema: z.ZodType<Prisma.LabDeleteManyArgs> = z.object({
  where: LabWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabDeleteManyArgsSchema;
