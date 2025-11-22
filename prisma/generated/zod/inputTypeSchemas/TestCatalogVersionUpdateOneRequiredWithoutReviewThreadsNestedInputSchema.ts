import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUpsertWithoutReviewThreadsInputSchema } from './TestCatalogVersionUpsertWithoutReviewThreadsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUpdateWithoutReviewThreadsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutReviewThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutReviewThreadsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutReviewThreadsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutReviewThreadsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutReviewThreadsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInputSchema;
