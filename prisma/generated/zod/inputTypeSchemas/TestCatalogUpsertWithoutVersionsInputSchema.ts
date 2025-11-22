import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutVersionsInputSchema } from './TestCatalogUpdateWithoutVersionsInputSchema';
import { TestCatalogUncheckedUpdateWithoutVersionsInputSchema } from './TestCatalogUncheckedUpdateWithoutVersionsInputSchema';
import { TestCatalogCreateWithoutVersionsInputSchema } from './TestCatalogCreateWithoutVersionsInputSchema';
import { TestCatalogUncheckedCreateWithoutVersionsInputSchema } from './TestCatalogUncheckedCreateWithoutVersionsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutVersionsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutVersionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutVersionsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutVersionsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutVersionsInputSchema;
