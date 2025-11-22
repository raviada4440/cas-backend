import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutVersionsInputSchema } from './TestCatalogUpdateWithoutVersionsInputSchema';
import { TestCatalogUncheckedUpdateWithoutVersionsInputSchema } from './TestCatalogUncheckedUpdateWithoutVersionsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutVersionsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutVersionsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutVersionsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutVersionsInputSchema;
