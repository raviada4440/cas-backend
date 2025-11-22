import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateWithoutProviderInputSchema } from './ProviderFavoriteTestCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema } from './ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema } from './ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';

export const ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
});

export default ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInputSchema;
