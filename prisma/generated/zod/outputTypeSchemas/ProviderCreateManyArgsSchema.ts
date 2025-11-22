import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderCreateManyInputSchema } from '../inputTypeSchemas/ProviderCreateManyInputSchema'

export const ProviderCreateManyArgsSchema: z.ZodType<Prisma.ProviderCreateManyArgs> = z.object({
  data: z.union([ ProviderCreateManyInputSchema, ProviderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderCreateManyArgsSchema;
