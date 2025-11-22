import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateCreateManyInputSchema } from '../inputTypeSchemas/ConsentTemplateCreateManyInputSchema'

export const ConsentTemplateCreateManyArgsSchema: z.ZodType<Prisma.ConsentTemplateCreateManyArgs> = z.object({
  data: z.union([ ConsentTemplateCreateManyInputSchema, ConsentTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ConsentTemplateCreateManyArgsSchema;
