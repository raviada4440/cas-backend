import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';
import { BiomarkerUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUpdateWithoutTestBiomarkersInputSchema';
import { BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema } from './BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema';

export const BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInputSchema: z.ZodType<Prisma.BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInput> = z.strictObject({
  where: z.lazy(() => BiomarkerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BiomarkerUpdateWithoutTestBiomarkersInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutTestBiomarkersInputSchema) ]),
});

export default BiomarkerUpdateToOneWithWhereWithoutTestBiomarkersInputSchema;
