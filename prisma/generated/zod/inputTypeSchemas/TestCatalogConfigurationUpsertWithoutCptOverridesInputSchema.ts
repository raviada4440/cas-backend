import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutCptOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutCptOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutCptOverridesInputSchema;
