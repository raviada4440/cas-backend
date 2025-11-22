import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentIncludeSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentIncludeSchema'
import { LabOrderSponsoredTestConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereInputSchema'
import { LabOrderSponsoredTestConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentOrderByWithRelationInputSchema'
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereUniqueInputSchema'
import { LabOrderSponsoredTestConsentScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentScalarFieldEnumSchema'
import { SponsoredTestArgsSchema } from "../outputTypeSchemas/SponsoredTestArgsSchema"
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderSponsoredTestConsentSelectSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  sponsoredCasandraTestId: z.boolean().optional(),
  providerName: z.boolean().optional(),
  providerNpi: z.boolean().optional(),
  consentAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sponsoredTest: z.union([z.boolean(),z.lazy(() => SponsoredTestArgsSchema)]).optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export const LabOrderSponsoredTestConsentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentFindFirstOrThrowArgs> = z.object({
  select: LabOrderSponsoredTestConsentSelectSchema.optional(),
  include: z.lazy(() => LabOrderSponsoredTestConsentIncludeSchema).optional(),
  where: LabOrderSponsoredTestConsentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderSponsoredTestConsentOrderByWithRelationInputSchema.array(), LabOrderSponsoredTestConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderSponsoredTestConsentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabOrderSponsoredTestConsentScalarFieldEnumSchema, LabOrderSponsoredTestConsentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LabOrderSponsoredTestConsentFindFirstOrThrowArgsSchema;
