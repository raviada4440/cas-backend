import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationCreateManyInputSchema } from '../inputTypeSchemas/PatientOrganizationCreateManyInputSchema'

export const PatientOrganizationCreateManyArgsSchema: z.ZodType<Prisma.PatientOrganizationCreateManyArgs> = z.object({
  data: z.union([ PatientOrganizationCreateManyInputSchema, PatientOrganizationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default PatientOrganizationCreateManyArgsSchema;
