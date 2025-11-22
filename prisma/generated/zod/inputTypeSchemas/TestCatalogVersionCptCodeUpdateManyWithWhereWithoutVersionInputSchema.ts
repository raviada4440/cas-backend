import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeScalarWhereInputSchema } from './TestCatalogVersionCptCodeScalarWhereInputSchema';
import { TestCatalogVersionCptCodeUpdateManyMutationInputSchema } from './TestCatalogVersionCptCodeUpdateManyMutationInputSchema';
import { TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema;
