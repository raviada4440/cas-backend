import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';
import { SponsoredTestUpdateManyMutationInputSchema } from './SponsoredTestUpdateManyMutationInputSchema';
import { SponsoredTestUncheckedUpdateManyWithoutLabInputSchema } from './SponsoredTestUncheckedUpdateManyWithoutLabInputSchema';

export const SponsoredTestUpdateManyWithWhereWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestUpdateManyWithWhereWithoutLabInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateManyMutationInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateManyWithoutLabInputSchema) ]),
});

export default SponsoredTestUpdateManyWithWhereWithoutLabInputSchema;
