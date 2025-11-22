import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUpdateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema';
import { BiomarkerCreateWithoutConfigOverridesInputSchema } from './BiomarkerCreateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';

export const BiomarkerUpsertWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerUpsertWithoutConfigOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => BiomarkerUpdateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema) ]),
  where: z.lazy(() => BiomarkerWhereInputSchema).optional(),
});

export default BiomarkerUpsertWithoutConfigOverridesInputSchema;
