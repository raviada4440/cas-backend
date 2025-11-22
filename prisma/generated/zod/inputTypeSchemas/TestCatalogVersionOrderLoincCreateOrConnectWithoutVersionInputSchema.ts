import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema;
