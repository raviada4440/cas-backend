import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorCreateWithoutSponsoredProgramsInputSchema } from './SponsorCreateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema';
import { SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema } from './SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema';
import { SponsorUpsertWithoutSponsoredProgramsInputSchema } from './SponsorUpsertWithoutSponsoredProgramsInputSchema';
import { SponsorWhereInputSchema } from './SponsorWhereInputSchema';
import { SponsorWhereUniqueInputSchema } from './SponsorWhereUniqueInputSchema';
import { SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInputSchema } from './SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInputSchema';
import { SponsorUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUpdateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema';

export const SponsorUpdateOneWithoutSponsoredProgramsNestedInputSchema: z.ZodType<Prisma.SponsorUpdateOneWithoutSponsoredProgramsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsorCreateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema).optional(),
  upsert: z.lazy(() => SponsorUpsertWithoutSponsoredProgramsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SponsorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SponsorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SponsorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUpdateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema) ]).optional(),
});

export default SponsorUpdateOneWithoutSponsoredProgramsNestedInputSchema;
