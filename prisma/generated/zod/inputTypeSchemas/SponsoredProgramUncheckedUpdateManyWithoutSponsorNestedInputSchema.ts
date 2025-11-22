import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramCreateWithoutSponsorInputSchema } from './SponsoredProgramCreateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsorInputSchema';
import { SponsoredProgramCreateOrConnectWithoutSponsorInputSchema } from './SponsoredProgramCreateOrConnectWithoutSponsorInputSchema';
import { SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema } from './SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema';
import { SponsoredProgramCreateManySponsorInputEnvelopeSchema } from './SponsoredProgramCreateManySponsorInputEnvelopeSchema';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema } from './SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema';
import { SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema } from './SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema';
import { SponsoredProgramScalarWhereInputSchema } from './SponsoredProgramScalarWhereInputSchema';

export const SponsoredProgramUncheckedUpdateManyWithoutSponsorNestedInputSchema: z.ZodType<Prisma.SponsoredProgramUncheckedUpdateManyWithoutSponsorNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema).array(), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredProgramCreateManySponsorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SponsoredProgramWhereUniqueInputSchema), z.lazy(() => SponsoredProgramWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SponsoredProgramWhereUniqueInputSchema), z.lazy(() => SponsoredProgramWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SponsoredProgramWhereUniqueInputSchema), z.lazy(() => SponsoredProgramWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SponsoredProgramWhereUniqueInputSchema), z.lazy(() => SponsoredProgramWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SponsoredProgramScalarWhereInputSchema), z.lazy(() => SponsoredProgramScalarWhereInputSchema).array() ]).optional(),
});

export default SponsoredProgramUncheckedUpdateManyWithoutSponsorNestedInputSchema;
