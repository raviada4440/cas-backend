import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenScalarWhereInputSchema } from './TestCatalogVersionSpecimenScalarWhereInputSchema';
import { TestCatalogVersionSpecimenUpdateManyMutationInputSchema } from './TestCatalogVersionSpecimenUpdateManyMutationInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema;
