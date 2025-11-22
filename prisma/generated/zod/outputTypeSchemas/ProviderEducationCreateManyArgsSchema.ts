import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationCreateManyInputSchema } from '../inputTypeSchemas/ProviderEducationCreateManyInputSchema'

export const ProviderEducationCreateManyArgsSchema: z.ZodType<Prisma.ProviderEducationCreateManyArgs> = z.object({
  data: z.union([ ProviderEducationCreateManyInputSchema, ProviderEducationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderEducationCreateManyArgsSchema;
