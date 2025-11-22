import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUpdateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema';
import { BiomarkerCreateWithoutTestBiomarkersInputSchema } from './BiomarkerCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';

export const BiomarkerUpsertWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerUpsertWithoutTestBiomarkersInput> = z.strictObject({
  update: z.union([ z.lazy(() => BiomarkerUpdateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema) ]),
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema) ]),
  where: z.lazy(() => BiomarkerWhereInputSchema).optional(),
});

export default BiomarkerUpsertWithoutTestBiomarkersInputSchema;
