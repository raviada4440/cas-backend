import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutTestGenesInputSchema } from './TestCatalogUpdateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedUpdateWithoutTestGenesInputSchema } from './TestCatalogUncheckedUpdateWithoutTestGenesInputSchema';
import { TestCatalogCreateWithoutTestGenesInputSchema } from './TestCatalogCreateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedCreateWithoutTestGenesInputSchema } from './TestCatalogUncheckedCreateWithoutTestGenesInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutTestGenesInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutTestGenesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutTestGenesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutTestGenesInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutTestGenesInputSchema;
