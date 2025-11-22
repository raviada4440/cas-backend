import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientIncludeSchema } from '../inputTypeSchemas/PatientIncludeSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { PatientCreateInputSchema } from '../inputTypeSchemas/PatientCreateInputSchema'
import { PatientUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientUncheckedCreateInputSchema'
import { PatientUpdateInputSchema } from '../inputTypeSchemas/PatientUpdateInputSchema'
import { PatientUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientUncheckedUpdateInputSchema'
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { PatientCountOutputTypeArgsSchema } from "../outputTypeSchemas/PatientCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  gender: z.boolean().optional(),
  email: z.boolean().optional(),
  mobile: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PatientUpsertArgsSchema: z.ZodType<Prisma.PatientUpsertArgs> = z.object({
  select: PatientSelectSchema.optional(),
  include: z.lazy(() => PatientIncludeSchema).optional(),
  where: PatientWhereUniqueInputSchema, 
  create: z.union([ PatientCreateInputSchema, PatientUncheckedCreateInputSchema ]),
  update: z.union([ PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema ]),
}).strict();

export default PatientUpsertArgsSchema;
