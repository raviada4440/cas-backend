import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUpdateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInputSchema;
