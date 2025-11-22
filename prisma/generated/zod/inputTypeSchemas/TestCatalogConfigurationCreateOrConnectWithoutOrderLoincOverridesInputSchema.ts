import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema;
