import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from './TestCatalogVersionCptCodeWhereUniqueInputSchema';
import { TestCatalogVersionCptCodeCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema;
