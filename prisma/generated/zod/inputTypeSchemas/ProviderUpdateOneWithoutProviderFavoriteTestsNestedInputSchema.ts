import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema } from './ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema';
import { ProviderUpsertWithoutProviderFavoriteTestsInputSchema } from './ProviderUpsertWithoutProviderFavoriteTestsInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema } from './ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema';
import { ProviderUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUpdateWithoutProviderFavoriteTestsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';

export const ProviderUpdateOneWithoutProviderFavoriteTestsNestedInputSchema: z.ZodType<Prisma.ProviderUpdateOneWithoutProviderFavoriteTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderFavoriteTestsInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutProviderFavoriteTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
});

export default ProviderUpdateOneWithoutProviderFavoriteTestsNestedInputSchema;
