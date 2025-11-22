import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutCptCodesInputSchema } from './TestCatalogVersionCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutCptCodesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema;
