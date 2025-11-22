import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdCreateManyInputSchema } from '../inputTypeSchemas/IcdCreateManyInputSchema'

export const IcdCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IcdCreateManyAndReturnArgs> = z.object({
  data: z.union([ IcdCreateManyInputSchema, IcdCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IcdCreateManyAndReturnArgsSchema;
