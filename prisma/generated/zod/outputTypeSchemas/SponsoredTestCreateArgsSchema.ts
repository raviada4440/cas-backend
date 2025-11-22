import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestIncludeSchema } from '../inputTypeSchemas/SponsoredTestIncludeSchema'
import { SponsoredTestCreateInputSchema } from '../inputTypeSchemas/SponsoredTestCreateInputSchema'
import { SponsoredTestUncheckedCreateInputSchema } from '../inputTypeSchemas/SponsoredTestUncheckedCreateInputSchema'
import { LabOrderSponsoredTestConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderSponsoredTestConsentFindManyArgsSchema"
import { LabArgsSchema } from "../outputTypeSchemas/LabArgsSchema"
import { SponsoredProgramArgsSchema } from "../outputTypeSchemas/SponsoredProgramArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { SponsoredTestCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsoredTestCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SponsoredTestSelectSchema: z.ZodType<Prisma.SponsoredTestSelect> = z.object({
  id: z.boolean().optional(),
  testId: z.boolean().optional(),
  labTestId: z.boolean().optional(),
  sponsoredProgramId: z.boolean().optional(),
  labId: z.boolean().optional(),
  casandraTestId: z.boolean().optional(),
  category: z.boolean().optional(),
  subCategory: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrderSponsoredTestConsents: z.union([z.boolean(),z.lazy(() => LabOrderSponsoredTestConsentFindManyArgsSchema)]).optional(),
  lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  sponsoredProgram: z.union([z.boolean(),z.lazy(() => SponsoredProgramArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SponsoredTestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SponsoredTestCreateArgsSchema: z.ZodType<Prisma.SponsoredTestCreateArgs> = z.object({
  select: SponsoredTestSelectSchema.optional(),
  include: z.lazy(() => SponsoredTestIncludeSchema).optional(),
  data: z.union([ SponsoredTestCreateInputSchema, SponsoredTestUncheckedCreateInputSchema ]),
}).strict();

export default SponsoredTestCreateArgsSchema;
