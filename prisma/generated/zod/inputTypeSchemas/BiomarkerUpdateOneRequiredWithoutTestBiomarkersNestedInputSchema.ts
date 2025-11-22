import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerCreateWithoutTestBiomarkersInputSchema } from './BiomarkerCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema';
import { BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema } from './BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema';
import { BiomarkerUpsertWithoutTestBiomarkersInputSchema } from './BiomarkerUpsertWithoutTestBiomarkersInputSchema';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';
import { BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInputSchema } from './BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInputSchema';
import { BiomarkerUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUpdateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema';

export const BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInputSchema: z.ZodType<Prisma.BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutTestBiomarkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BiomarkerCreateOrConnectWithoutTestBiomarkersInputSchema).optional(),
  upsert: z.lazy(() => BiomarkerUpsertWithoutTestBiomarkersInputSchema).optional(),
  connect: z.lazy(() => BiomarkerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUpdateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema) ]).optional(),
});

export default BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInputSchema;
