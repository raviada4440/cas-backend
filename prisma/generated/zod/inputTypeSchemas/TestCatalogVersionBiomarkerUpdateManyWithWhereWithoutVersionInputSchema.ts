import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerScalarWhereInputSchema } from './TestCatalogVersionBiomarkerScalarWhereInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyMutationInputSchema } from './TestCatalogVersionBiomarkerUpdateManyMutationInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema;
