import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInputSchema;
