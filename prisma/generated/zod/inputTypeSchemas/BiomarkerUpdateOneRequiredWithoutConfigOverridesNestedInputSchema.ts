import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerCreateWithoutConfigOverridesInputSchema } from './BiomarkerCreateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema';
import { BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema } from './BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema';
import { BiomarkerUpsertWithoutConfigOverridesInputSchema } from './BiomarkerUpsertWithoutConfigOverridesInputSchema';
import { BiomarkerWhereUniqueInputSchema } from './BiomarkerWhereUniqueInputSchema';
import { BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInputSchema } from './BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInputSchema';
import { BiomarkerUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUpdateWithoutConfigOverridesInputSchema';
import { BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema } from './BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema';

export const BiomarkerUpdateOneRequiredWithoutConfigOverridesNestedInputSchema: z.ZodType<Prisma.BiomarkerUpdateOneRequiredWithoutConfigOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BiomarkerCreateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedCreateWithoutConfigOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BiomarkerCreateOrConnectWithoutConfigOverridesInputSchema).optional(),
  upsert: z.lazy(() => BiomarkerUpsertWithoutConfigOverridesInputSchema).optional(),
  connect: z.lazy(() => BiomarkerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BiomarkerUpdateToOneWithWhereWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUpdateWithoutConfigOverridesInputSchema), z.lazy(() => BiomarkerUncheckedUpdateWithoutConfigOverridesInputSchema) ]).optional(),
});

export default BiomarkerUpdateOneRequiredWithoutConfigOverridesNestedInputSchema;
