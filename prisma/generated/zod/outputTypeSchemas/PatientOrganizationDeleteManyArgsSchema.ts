import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationWhereInputSchema } from '../inputTypeSchemas/PatientOrganizationWhereInputSchema'

export const PatientOrganizationDeleteManyArgsSchema: z.ZodType<Prisma.PatientOrganizationDeleteManyArgs> = z.object({
  where: PatientOrganizationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default PatientOrganizationDeleteManyArgsSchema;
