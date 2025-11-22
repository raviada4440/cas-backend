import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExternalIdentifierCreateManyInputSchema } from '../inputTypeSchemas/ExternalIdentifierCreateManyInputSchema'

export const ExternalIdentifierCreateManyArgsSchema: z.ZodType<Prisma.ExternalIdentifierCreateManyArgs> = z.object({
  data: z.union([ ExternalIdentifierCreateManyInputSchema, ExternalIdentifierCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ExternalIdentifierCreateManyArgsSchema;
