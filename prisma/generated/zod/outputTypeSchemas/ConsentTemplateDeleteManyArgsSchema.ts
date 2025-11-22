import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateWhereInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereInputSchema'

export const ConsentTemplateDeleteManyArgsSchema: z.ZodType<Prisma.ConsentTemplateDeleteManyArgs> = z.object({
  where: ConsentTemplateWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ConsentTemplateDeleteManyArgsSchema;
