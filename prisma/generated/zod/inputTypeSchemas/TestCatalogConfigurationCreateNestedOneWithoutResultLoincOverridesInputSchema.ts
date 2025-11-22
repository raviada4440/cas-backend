import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutResultLoincOverridesInputSchema;
