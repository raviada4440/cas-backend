import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationIncludeSchema } from '../inputTypeSchemas/ProviderOrganizationIncludeSchema'
import { ProviderOrganizationUpdateInputSchema } from '../inputTypeSchemas/ProviderOrganizationUpdateInputSchema'
import { ProviderOrganizationUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProviderOrganizationUncheckedUpdateInputSchema'
import { ProviderOrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereUniqueInputSchema'
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProviderOrganizationSelectSchema: z.ZodType<Prisma.ProviderOrganizationSelect> = z.object({
  id: z.boolean().optional(),
  providerId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  providerNpi: z.boolean().optional(),
  name: z.boolean().optional(),
  parentOrgName: z.boolean().optional(),
  orgName: z.boolean().optional(),
  orgAddress: z.boolean().optional(),
  orgCity: z.boolean().optional(),
  orgState: z.boolean().optional(),
  orgZip: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
}).strict()

export const ProviderOrganizationUpdateArgsSchema: z.ZodType<Prisma.ProviderOrganizationUpdateArgs> = z.object({
  select: ProviderOrganizationSelectSchema.optional(),
  include: z.lazy(() => ProviderOrganizationIncludeSchema).optional(),
  data: z.union([ ProviderOrganizationUpdateInputSchema, ProviderOrganizationUncheckedUpdateInputSchema ]),
  where: ProviderOrganizationWhereUniqueInputSchema, 
}).strict();

export default ProviderOrganizationUpdateArgsSchema;
