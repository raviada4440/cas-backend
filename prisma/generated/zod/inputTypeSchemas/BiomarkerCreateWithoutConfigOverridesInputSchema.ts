import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerCreateWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerCreateWithoutConfigOverridesInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerCreateWithoutConfigOverridesInputSchema;
