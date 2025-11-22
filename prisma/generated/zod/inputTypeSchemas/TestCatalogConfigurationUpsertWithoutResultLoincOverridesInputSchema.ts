import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutResultLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutResultLoincOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutResultLoincOverridesInputSchema;
