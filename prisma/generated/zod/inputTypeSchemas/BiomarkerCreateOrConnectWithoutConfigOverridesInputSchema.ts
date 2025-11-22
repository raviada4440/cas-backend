import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';
import { BiomarkerCreateWithoutConfigOverridesInputSchema } from './BiomarkerCreateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema';

export const BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerCreateOrConnectWithoutConfigOverridesInput> = z.strictObject({
  where: z.lazy(() => BiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema) ]),
});

export default BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema;
