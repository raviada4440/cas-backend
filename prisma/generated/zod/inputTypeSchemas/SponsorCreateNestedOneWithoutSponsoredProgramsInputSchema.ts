import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorCreateWithoutSponsoredProgramsInputSchema } from './SponsorCreateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema';
import { SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema } from './SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema';
import { SponsorWhereUniqueInputSchema } from './SponsorWhereUniqueInputSchema';

export const SponsorCreateNestedOneWithoutSponsoredProgramsInputSchema: z.ZodType<Prisma.SponsorCreateNestedOneWithoutSponsoredProgramsInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsorCreateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema).optional(),
  connect: z.lazy(() => SponsorWhereUniqueInputSchema).optional(),
});

export default SponsorCreateNestedOneWithoutSponsoredProgramsInputSchema;
