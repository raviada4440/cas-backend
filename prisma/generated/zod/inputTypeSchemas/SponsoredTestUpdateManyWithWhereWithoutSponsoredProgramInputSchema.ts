import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';
import { SponsoredTestUpdateManyMutationInputSchema } from './SponsoredTestUpdateManyMutationInputSchema';
import { SponsoredTestUncheckedUpdateManyWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedUpdateManyWithoutSponsoredProgramInputSchema';

export const SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateManyMutationInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateManyWithoutSponsoredProgramInputSchema) ]),
});

export default SponsoredTestUpdateManyWithWhereWithoutSponsoredProgramInputSchema;
