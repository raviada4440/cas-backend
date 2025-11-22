import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogScalarWhereInputSchema } from './TestCatalogScalarWhereInputSchema';
import { TestCatalogUpdateManyMutationInputSchema } from './TestCatalogUpdateManyMutationInputSchema';
import { TestCatalogUncheckedUpdateManyWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedUpdateManyWithoutDefaultVersionInputSchema';

export const TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithWhereWithoutDefaultVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateManyMutationInputSchema), z.lazy(() => TestCatalogUncheckedUpdateManyWithoutDefaultVersionInputSchema) ]),
});

export default TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema;
