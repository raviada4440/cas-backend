import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogCreateManyInputSchema } from '../inputTypeSchemas/ConsentAuditLogCreateManyInputSchema'

export const ConsentAuditLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ConsentAuditLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ ConsentAuditLogCreateManyInputSchema, ConsentAuditLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ConsentAuditLogCreateManyAndReturnArgsSchema;
