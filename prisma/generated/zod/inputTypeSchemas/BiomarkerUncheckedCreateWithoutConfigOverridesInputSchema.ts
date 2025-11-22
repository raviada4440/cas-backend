import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerUncheckedCreateWithoutConfigOverridesInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema;
