import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderCreateManyInputSchema } from '../inputTypeSchemas/ProviderCreateManyInputSchema'

export const ProviderCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProviderCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProviderCreateManyInputSchema, ProviderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderCreateManyAndReturnArgsSchema;
