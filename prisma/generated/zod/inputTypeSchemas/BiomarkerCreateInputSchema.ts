import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerCreateInputSchema: z.ZodType<Prisma.BiomarkerCreateInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerCreateInputSchema;
