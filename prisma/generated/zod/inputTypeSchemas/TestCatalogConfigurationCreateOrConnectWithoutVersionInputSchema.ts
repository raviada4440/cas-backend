import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutVersionInputSchema } from './TestCatalogConfigurationCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema;
