import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderSponsoredTestConsentFindManyArgsSchema"
import { LabArgsSchema } from "../outputTypeSchemas/LabArgsSchema"
import { SponsoredProgramArgsSchema } from "../outputTypeSchemas/SponsoredProgramArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { SponsoredTestCountOutputTypeArgsSchema } from "../outputTypeSchemas/SponsoredTestCountOutputTypeArgsSchema"

export const SponsoredTestIncludeSchema: z.ZodType<Prisma.SponsoredTestInclude> = z.object({
  labOrderSponsoredTestConsents: z.union([z.boolean(),z.lazy(() => LabOrderSponsoredTestConsentFindManyArgsSchema)]).optional(),
  lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  sponsoredProgram: z.union([z.boolean(),z.lazy(() => SponsoredProgramArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SponsoredTestCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default SponsoredTestIncludeSchema;
