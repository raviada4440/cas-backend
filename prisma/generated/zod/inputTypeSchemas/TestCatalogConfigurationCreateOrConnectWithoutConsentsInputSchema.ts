import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema;
