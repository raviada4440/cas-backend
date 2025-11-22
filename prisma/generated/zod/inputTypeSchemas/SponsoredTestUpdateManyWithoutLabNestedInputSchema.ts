import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutLabInputSchema } from './SponsoredTestCreateWithoutLabInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabInputSchema } from './SponsoredTestUncheckedCreateWithoutLabInputSchema';
import { SponsoredTestCreateOrConnectWithoutLabInputSchema } from './SponsoredTestCreateOrConnectWithoutLabInputSchema';
import { SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema } from './SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema';
import { SponsoredTestCreateManyLabInputEnvelopeSchema } from './SponsoredTestCreateManyLabInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema } from './SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema';
import { SponsoredTestUpdateManyWithWhereWithoutLabInputSchema } from './SponsoredTestUpdateManyWithWhereWithoutLabInputSchema';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';

export const SponsoredTestUpdateManyWithoutLabNestedInputSchema: z.ZodType<Prisma.SponsoredTestUpdateManyWithoutLabNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestCreateWithoutLabInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutLabInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema), z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManyLabInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema), z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutLabInputSchema), z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutLabInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SponsoredTestScalarWhereInputSchema), z.lazy(() => SponsoredTestScalarWhereInputSchema).array() ]).optional(),
});

export default SponsoredTestUpdateManyWithoutLabNestedInputSchema;
