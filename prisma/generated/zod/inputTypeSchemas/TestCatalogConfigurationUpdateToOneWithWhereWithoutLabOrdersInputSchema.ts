import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInputSchema;
