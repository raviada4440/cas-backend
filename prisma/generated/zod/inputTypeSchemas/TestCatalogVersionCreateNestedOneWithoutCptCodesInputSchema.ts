import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutCptCodesInputSchema } from './TestCatalogVersionCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema } from './TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutCptCodesInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutCptCodesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutCptCodesInputSchema;
