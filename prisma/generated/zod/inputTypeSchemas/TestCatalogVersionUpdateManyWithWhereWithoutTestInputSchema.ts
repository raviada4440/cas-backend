import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionScalarWhereInputSchema } from './TestCatalogVersionScalarWhereInputSchema';
import { TestCatalogVersionUpdateManyMutationInputSchema } from './TestCatalogVersionUpdateManyMutationInputSchema';
import { TestCatalogVersionUncheckedUpdateManyWithoutTestInputSchema } from './TestCatalogVersionUncheckedUpdateManyWithoutTestInputSchema';

export const TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateManyWithWhereWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateManyWithoutTestInputSchema) ]),
});

export default TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema;
