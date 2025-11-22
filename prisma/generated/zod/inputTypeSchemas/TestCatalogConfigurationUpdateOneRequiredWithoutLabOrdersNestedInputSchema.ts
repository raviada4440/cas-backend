import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUpsertWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUpsertWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutLabOrdersInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInputSchema;
