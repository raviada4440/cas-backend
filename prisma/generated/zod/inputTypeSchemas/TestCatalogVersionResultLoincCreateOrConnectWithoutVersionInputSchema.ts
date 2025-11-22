import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema;
