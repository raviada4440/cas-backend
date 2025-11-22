import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithoutProviderInputSchema } from './ProviderFavoriteTestUpdateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateWithoutProviderInputSchema } from './ProviderFavoriteTestCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema';

export const ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateWithoutProviderInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema;
