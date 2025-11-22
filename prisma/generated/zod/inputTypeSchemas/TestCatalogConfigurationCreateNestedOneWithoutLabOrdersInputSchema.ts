import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInputSchema;
