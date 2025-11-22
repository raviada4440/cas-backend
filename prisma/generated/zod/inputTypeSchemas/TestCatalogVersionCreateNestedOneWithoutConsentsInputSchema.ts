import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConsentsInputSchema } from './TestCatalogVersionCreateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutConsentsInputSchema;
