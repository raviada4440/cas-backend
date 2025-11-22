import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUpdateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema';
import { TestCatalogConfigurationCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutConsentsInputSchema;
