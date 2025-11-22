import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema;
