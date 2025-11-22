import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationCreateWithoutProviderInputSchema } from './ProviderEducationCreateWithoutProviderInputSchema';
import { ProviderEducationUncheckedCreateWithoutProviderInputSchema } from './ProviderEducationUncheckedCreateWithoutProviderInputSchema';
import { ProviderEducationCreateOrConnectWithoutProviderInputSchema } from './ProviderEducationCreateOrConnectWithoutProviderInputSchema';
import { ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema } from './ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema';
import { ProviderEducationCreateManyProviderInputEnvelopeSchema } from './ProviderEducationCreateManyProviderInputEnvelopeSchema';
import { ProviderEducationWhereUniqueInputSchema } from './ProviderEducationWhereUniqueInputSchema';
import { ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema } from './ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema';
import { ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema } from './ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema';
import { ProviderEducationScalarWhereInputSchema } from './ProviderEducationScalarWhereInputSchema';

export const ProviderEducationUncheckedUpdateManyWithoutProviderNestedInputSchema: z.ZodType<Prisma.ProviderEducationUncheckedUpdateManyWithoutProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationCreateWithoutProviderInputSchema).array(), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema), z.lazy(() => ProviderEducationUncheckedCreateWithoutProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderEducationCreateOrConnectWithoutProviderInputSchema), z.lazy(() => ProviderEducationCreateOrConnectWithoutProviderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderEducationUpsertWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderEducationCreateManyProviderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProviderEducationWhereUniqueInputSchema), z.lazy(() => ProviderEducationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProviderEducationWhereUniqueInputSchema), z.lazy(() => ProviderEducationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProviderEducationWhereUniqueInputSchema), z.lazy(() => ProviderEducationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProviderEducationWhereUniqueInputSchema), z.lazy(() => ProviderEducationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema), z.lazy(() => ProviderEducationUpdateWithWhereUniqueWithoutProviderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema), z.lazy(() => ProviderEducationUpdateManyWithWhereWithoutProviderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProviderEducationScalarWhereInputSchema), z.lazy(() => ProviderEducationScalarWhereInputSchema).array() ]).optional(),
});

export default ProviderEducationUncheckedUpdateManyWithoutProviderNestedInputSchema;
