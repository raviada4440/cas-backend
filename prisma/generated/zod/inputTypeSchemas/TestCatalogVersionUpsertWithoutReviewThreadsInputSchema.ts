import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUpdateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutReviewThreadsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutReviewThreadsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutReviewThreadsInputSchema;
