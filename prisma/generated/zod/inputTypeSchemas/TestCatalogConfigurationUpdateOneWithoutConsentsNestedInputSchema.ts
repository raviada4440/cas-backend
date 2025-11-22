import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema';
import { TestCatalogConfigurationUpsertWithoutConsentsInputSchema } from './TestCatalogConfigurationUpsertWithoutConsentsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInputSchema';
import { TestCatalogConfigurationUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUpdateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema';

export const TestCatalogConfigurationUpdateOneWithoutConsentsNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneWithoutConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutConsentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneWithoutConsentsNestedInputSchema;
