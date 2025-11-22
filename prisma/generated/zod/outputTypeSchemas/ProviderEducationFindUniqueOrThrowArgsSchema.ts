import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderEducationIncludeSchema } from '../inputTypeSchemas/ProviderEducationIncludeSchema'
import { ProviderEducationWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderEducationWhereUniqueInputSchema'
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProviderEducationSelectSchema: z.ZodType<Prisma.ProviderEducationSelect> = z.object({
  id: z.boolean().optional(),
  providerId: z.boolean().optional(),
  providerNpi: z.boolean().optional(),
  name: z.boolean().optional(),
  educationType: z.boolean().optional(),
  schoolName: z.boolean().optional(),
  areaOfEducation: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
}).strict()

export const ProviderEducationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProviderEducationFindUniqueOrThrowArgs> = z.object({
  select: ProviderEducationSelectSchema.optional(),
  include: z.lazy(() => ProviderEducationIncludeSchema).optional(),
  where: ProviderEducationWhereUniqueInputSchema, 
}).strict();

export default ProviderEducationFindUniqueOrThrowArgsSchema;
