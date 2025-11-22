import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema;
