import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInputSchema;
