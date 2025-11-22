import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema';
import { SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema } from './SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';

export const SponsoredTestUncheckedCreateNestedManyWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedCreateNestedManyWithoutSponsoredProgramInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
});

export default SponsoredTestUncheckedCreateNestedManyWithoutSponsoredProgramInputSchema;
