import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema';
import { SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema } from './SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema';
import { SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema } from './SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema } from './SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema';
import { SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema } from './SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';

export const SponsoredTestUpdateManyWithoutSponsoredProgramNestedInputSchema: z.ZodType<Prisma.SponsoredTestUpdateManyWithoutSponsoredProgramNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SponsoredTestScalarWhereInputSchema), z.lazy(() => SponsoredTestScalarWhereInputSchema).array() ]).optional(),
});

export default SponsoredTestUpdateManyWithoutSponsoredProgramNestedInputSchema;
