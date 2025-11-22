import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUpdateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';

export const ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema;
