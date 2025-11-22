import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramCreateWithoutSponsorInputSchema } from './SponsoredProgramCreateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsorInputSchema';
import { SponsoredProgramCreateOrConnectWithoutSponsorInputSchema } from './SponsoredProgramCreateOrConnectWithoutSponsorInputSchema';
import { SponsoredProgramCreateManySponsorInputEnvelopeSchema } from './SponsoredProgramCreateManySponsorInputEnvelopeSchema';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';

export const SponsoredProgramCreateNestedManyWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramCreateNestedManyWithoutSponsorInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema).array(), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredProgramCreateManySponsorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SponsoredProgramWhereUniqueInputSchema), z.lazy(() => SponsoredProgramWhereUniqueInputSchema).array() ]).optional(),
});

export default SponsoredProgramCreateNestedManyWithoutSponsorInputSchema;
