import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneScalarWhereInputSchema } from './TestGeneScalarWhereInputSchema';
import { TestGeneUpdateManyMutationInputSchema } from './TestGeneUpdateManyMutationInputSchema';
import { TestGeneUncheckedUpdateManyWithoutTestCatalogInputSchema } from './TestGeneUncheckedUpdateManyWithoutTestCatalogInputSchema';

export const TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestGeneUpdateManyWithWhereWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => TestGeneScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestGeneUpdateManyMutationInputSchema), z.lazy(() => TestGeneUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
});

export default TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema;
