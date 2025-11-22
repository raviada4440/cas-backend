import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderCreateNestedOneWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutProviderFavoriteTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderCreateNestedOneWithoutProviderFavoriteTestsInputSchema;
