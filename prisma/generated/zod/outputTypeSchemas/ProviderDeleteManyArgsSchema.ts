import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderWhereInputSchema } from '../inputTypeSchemas/ProviderWhereInputSchema'

export const ProviderDeleteManyArgsSchema: z.ZodType<Prisma.ProviderDeleteManyArgs> = z.object({
  where: ProviderWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderDeleteManyArgsSchema;
