import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestScalarWhereInputSchema } from './ProviderFavoriteTestScalarWhereInputSchema';
import { ProviderFavoriteTestUpdateManyMutationInputSchema } from './ProviderFavoriteTestUpdateManyMutationInputSchema';
import { ProviderFavoriteTestUncheckedUpdateManyWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedUpdateManyWithoutProviderInputSchema';

export const ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProviderFavoriteTestUpdateManyMutationInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateManyWithoutProviderInputSchema) ]),
});

export default ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema;
