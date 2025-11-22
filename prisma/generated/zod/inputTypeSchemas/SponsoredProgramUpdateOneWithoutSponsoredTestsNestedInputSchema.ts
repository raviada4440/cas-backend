import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUpsertWithoutSponsoredTestsInputSchema } from './SponsoredProgramUpsertWithoutSponsoredTestsInputSchema';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInputSchema } from './SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUpdateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInputSchema: z.ZodType<Prisma.SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  upsert: z.lazy(() => SponsoredProgramUpsertWithoutSponsoredTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SponsoredProgramWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SponsoredProgramWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SponsoredProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema) ]).optional(),
});

export default SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInputSchema;
