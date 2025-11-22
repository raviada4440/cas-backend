import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';

export const SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.SponsoredProgramCreateNestedOneWithoutSponsoredTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  connect: z.lazy(() => SponsoredProgramWhereUniqueInputSchema).optional(),
});

export default SponsoredProgramCreateNestedOneWithoutSponsoredTestsInputSchema;
