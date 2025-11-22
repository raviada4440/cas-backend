import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutReviewThreadsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema;
