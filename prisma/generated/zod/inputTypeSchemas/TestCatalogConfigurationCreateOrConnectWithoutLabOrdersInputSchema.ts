import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema;
