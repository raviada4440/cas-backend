import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithoutProviderInputSchema } from './ProviderFavoriteTestUpdateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema';

export const ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema) ]),
});

export default ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema;
