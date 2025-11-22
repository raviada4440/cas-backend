import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';
import { SponsoredTestUpdateManyMutationInputSchema } from './SponsoredTestUpdateManyMutationInputSchema';
import { SponsoredTestUncheckedUpdateManyWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedUpdateManyWithoutTestCatalogInputSchema';

export const SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestUpdateManyWithWhereWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateManyMutationInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
});

export default SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema;
