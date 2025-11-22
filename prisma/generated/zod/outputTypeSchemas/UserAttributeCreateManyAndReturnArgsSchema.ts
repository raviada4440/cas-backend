import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeCreateManyInputSchema } from '../inputTypeSchemas/UserAttributeCreateManyInputSchema'

export const UserAttributeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserAttributeCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserAttributeCreateManyInputSchema, UserAttributeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default UserAttributeCreateManyAndReturnArgsSchema;
