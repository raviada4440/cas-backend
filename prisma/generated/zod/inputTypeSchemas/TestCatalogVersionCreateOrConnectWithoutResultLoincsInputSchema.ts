import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutResultLoincsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema;
