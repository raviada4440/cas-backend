import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestCreateWithoutProviderInputSchema } from './ProviderFavoriteTestCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema';

export const ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateOrConnectWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema;
