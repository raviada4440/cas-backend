import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';
import { BiomarkerCreateWithoutTestBiomarkersInputSchema } from './BiomarkerCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema';

export const BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerCreateOrConnectWithoutTestBiomarkersInput> = z.strictObject({
  where: z.lazy(() => BiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema) ]),
});

export default BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema;
