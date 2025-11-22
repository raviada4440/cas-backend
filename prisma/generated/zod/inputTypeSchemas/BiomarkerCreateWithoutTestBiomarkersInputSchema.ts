import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerCreateWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerCreateWithoutTestBiomarkersInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerCreateWithoutTestBiomarkersInputSchema;
