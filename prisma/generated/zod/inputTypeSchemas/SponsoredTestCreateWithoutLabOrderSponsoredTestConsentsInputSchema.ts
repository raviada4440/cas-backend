import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateNestedOneWithoutSponsoredTestsInputSchema } from './LabCreateNestedOneWithoutSponsoredTestsInputSchema';
import { SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema } from './TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema';

export const SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  lab: z.lazy(() => LabCreateNestedOneWithoutSponsoredTestsInputSchema).optional(),
  sponsoredProgram: z.lazy(() => SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema),
});

export default SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema;
