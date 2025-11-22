import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateWithoutProviderInputSchema } from './ProviderFavoriteTestCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema } from './ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema';
import { ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema } from './ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema } from './ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema } from './ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema';
import { ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema } from './ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema';
import { ProviderFavoriteTestScalarWhereInputSchema } from './ProviderFavoriteTestScalarWhereInputSchema';

export const ProviderFavoriteTestUncheckedUpdateManyWithoutProviderNestedInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUncheckedUpdateManyWithoutProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUpsertWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUpdateWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema), z.lazy(() => ProviderFavoriteTestUpdateManyWithWhereWithoutProviderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema), z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema).array() ]).optional(),
});

export default ProviderFavoriteTestUncheckedUpdateManyWithoutProviderNestedInputSchema;
