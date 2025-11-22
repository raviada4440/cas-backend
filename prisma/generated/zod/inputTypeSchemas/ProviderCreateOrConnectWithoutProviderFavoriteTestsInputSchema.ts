import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema';

export const ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutProviderFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema;
