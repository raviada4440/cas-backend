import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';
import { BiomarkerUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUpdateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema';

export const BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInput> = z.strictObject({
  where: z.lazy(() => BiomarkerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BiomarkerUpdateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema) ]),
});

export default BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInputSchema;
