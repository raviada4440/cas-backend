import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutLabOrdersInputSchema;
