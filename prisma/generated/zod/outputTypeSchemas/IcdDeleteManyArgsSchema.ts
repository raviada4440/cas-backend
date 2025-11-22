import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdWhereInputSchema } from '../inputTypeSchemas/IcdWhereInputSchema'

export const IcdDeleteManyArgsSchema: z.ZodType<Prisma.IcdDeleteManyArgs> = z.object({
  where: IcdWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default IcdDeleteManyArgsSchema;
