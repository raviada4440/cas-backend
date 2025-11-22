import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationWhereInputSchema } from '../inputTypeSchemas/ProviderEducationWhereInputSchema'

export const ProviderEducationDeleteManyArgsSchema: z.ZodType<Prisma.ProviderEducationDeleteManyArgs> = z.object({
  where: ProviderEducationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderEducationDeleteManyArgsSchema;
