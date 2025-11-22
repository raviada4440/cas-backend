import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema';

export const BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerUncheckedCreateWithoutTestBiomarkersInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerUncheckedCreateNestedManyWithoutBiomarkerInputSchema).optional(),
});

export default BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema;
