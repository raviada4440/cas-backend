import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutReviewThreadsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema;
