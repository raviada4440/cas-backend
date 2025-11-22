import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogScalarWhereInputSchema } from './TestCatalogScalarWhereInputSchema';
import { TestCatalogUpdateManyMutationInputSchema } from './TestCatalogUpdateManyMutationInputSchema';
import { TestCatalogUncheckedUpdateManyWithoutLabInputSchema } from './TestCatalogUncheckedUpdateManyWithoutLabInputSchema';

export const TestCatalogUpdateManyWithWhereWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithWhereWithoutLabInput> = z.strictObject({
  where: z.lazy(() => TestCatalogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateManyMutationInputSchema), z.lazy(() => TestCatalogUncheckedUpdateManyWithoutLabInputSchema) ]),
});

export default TestCatalogUpdateManyWithWhereWithoutLabInputSchema;
