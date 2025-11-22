import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutDefaultForTestsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutDefaultForTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutDefaultForTestsInputSchema;
