import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema';
import { SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema } from './TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema';

export const SponsoredTestCreateWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestCreateWithoutLabInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema).optional(),
  sponsoredProgram: z.lazy(() => SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema),
});

export default SponsoredTestCreateWithoutLabInputSchema;
