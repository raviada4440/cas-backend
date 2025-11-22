import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerScalarWhereInputSchema } from './TestCatalogVersionBiomarkerScalarWhereInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyMutationInputSchema } from './TestCatalogVersionBiomarkerUpdateManyMutationInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema';

export const TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema;
