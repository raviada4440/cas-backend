import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerCreateWithoutTestBiomarkersInputSchema } from './BiomarkerCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema } from './BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';

export const BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerCreateNestedOneWithoutTestBiomarkersInput> = z.strictObject({
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema).optional(),
  connect: z.lazy(() => BiomarkerWhereUniqueInputSchema).optional(),
});

export default BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema;
