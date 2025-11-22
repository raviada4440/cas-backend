import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutTestGenesInputSchema } from './TestCatalogUpdateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedUpdateWithoutTestGenesInputSchema } from './TestCatalogUncheckedUpdateWithoutTestGenesInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutTestGenesInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutTestGenesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutTestGenesInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutTestGenesInputSchema;
