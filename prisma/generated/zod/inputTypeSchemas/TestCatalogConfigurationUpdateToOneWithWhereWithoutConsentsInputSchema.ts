import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUpdateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutConsentsInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutConsentsInputSchema;
