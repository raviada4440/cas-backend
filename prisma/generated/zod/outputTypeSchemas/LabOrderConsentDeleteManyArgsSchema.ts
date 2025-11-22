import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereInputSchema'

export const LabOrderConsentDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderConsentDeleteManyArgs> = z.object({
  where: LabOrderConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderConsentDeleteManyArgsSchema;
