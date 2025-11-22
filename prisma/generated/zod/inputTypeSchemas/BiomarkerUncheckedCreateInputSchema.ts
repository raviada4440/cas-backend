import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerUncheckedCreateInputSchema: z.ZodType<Prisma.BiomarkerUncheckedCreateInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerUncheckedCreateInputSchema;
