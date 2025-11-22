import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutConsentsInputSchema } from './TestCatalogVersionCreateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema;
