import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutResultLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema;
