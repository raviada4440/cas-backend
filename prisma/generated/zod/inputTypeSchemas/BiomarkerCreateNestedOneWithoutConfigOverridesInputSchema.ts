import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerCreateWithoutConfigOverridesInputSchema } from './BiomarkerCreateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema';
import { BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema } from './BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';

export const BiomarkerCreateNestedOneWithoutConfigOverridesInputSchema: z.ZodType<Prisma.BiomarkerCreateNestedOneWithoutConfigOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema).optional(),
  connect: z.lazy(() => BiomarkerWhereUniqueInputSchema).optional(),
});

export default BiomarkerCreateNestedOneWithoutConfigOverridesInputSchema;
