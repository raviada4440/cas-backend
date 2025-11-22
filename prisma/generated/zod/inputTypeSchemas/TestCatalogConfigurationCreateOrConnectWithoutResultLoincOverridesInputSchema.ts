import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema;
