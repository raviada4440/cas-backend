import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutOrderLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema;
