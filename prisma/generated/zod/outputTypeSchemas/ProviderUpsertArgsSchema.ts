import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderIncludeSchema } from '../inputTypeSchemas/ProviderIncludeSchema'
import { ProviderWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderWhereUniqueInputSchema'
import { ProviderCreateInputSchema } from '../inputTypeSchemas/ProviderCreateInputSchema'
import { ProviderUncheckedCreateInputSchema } from '../inputTypeSchemas/ProviderUncheckedCreateInputSchema'
import { ProviderUpdateInputSchema } from '../inputTypeSchemas/ProviderUpdateInputSchema'
import { ProviderUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProviderUncheckedUpdateInputSchema'
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"
import { ProviderEducationFindManyArgsSchema } from "../outputTypeSchemas/ProviderEducationFindManyArgsSchema"
import { ProviderFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/ProviderFavoriteTestFindManyArgsSchema"
import { ProviderOrganizationFindManyArgsSchema } from "../outputTypeSchemas/ProviderOrganizationFindManyArgsSchema"
import { ProviderCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProviderCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProviderSelectSchema: z.ZodType<Prisma.ProviderSelect> = z.object({
  id: z.boolean().optional(),
  href: z.boolean().optional(),
  npi: z.boolean().optional(),
  name: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  credentials: z.boolean().optional(),
  specialty: z.boolean().optional(),
  aboutme: z.boolean().optional(),
  gender: z.boolean().optional(),
  providerType: z.boolean().optional(),
  affiliation: z.boolean().optional(),
  proceduresAndResearch: z.boolean().optional(),
  specialInterests: z.boolean().optional(),
  userAttributeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderingProviderLabOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  treatingProviderLabOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
  providerEducation: z.union([z.boolean(),z.lazy(() => ProviderEducationFindManyArgsSchema)]).optional(),
  providerFavoriteTests: z.union([z.boolean(),z.lazy(() => ProviderFavoriteTestFindManyArgsSchema)]).optional(),
  providerOrganizations: z.union([z.boolean(),z.lazy(() => ProviderOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProviderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProviderUpsertArgsSchema: z.ZodType<Prisma.ProviderUpsertArgs> = z.object({
  select: ProviderSelectSchema.optional(),
  include: z.lazy(() => ProviderIncludeSchema).optional(),
  where: ProviderWhereUniqueInputSchema, 
  create: z.union([ ProviderCreateInputSchema, ProviderUncheckedCreateInputSchema ]),
  update: z.union([ ProviderUpdateInputSchema, ProviderUncheckedUpdateInputSchema ]),
}).strict();

export default ProviderUpsertArgsSchema;
