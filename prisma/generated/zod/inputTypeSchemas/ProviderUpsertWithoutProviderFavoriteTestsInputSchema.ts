import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUpdateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';
import { ProviderCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutProviderFavoriteTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutProviderFavoriteTestsInputSchema;
