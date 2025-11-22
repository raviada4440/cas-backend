import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInputSchema;
