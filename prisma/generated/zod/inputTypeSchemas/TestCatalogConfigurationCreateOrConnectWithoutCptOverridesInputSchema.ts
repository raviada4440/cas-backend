import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema;
