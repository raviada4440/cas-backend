import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInputSchema;
