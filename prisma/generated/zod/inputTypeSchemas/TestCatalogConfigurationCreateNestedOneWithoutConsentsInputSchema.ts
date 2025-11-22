import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutConsentsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema;
