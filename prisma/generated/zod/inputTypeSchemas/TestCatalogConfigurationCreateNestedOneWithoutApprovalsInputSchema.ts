import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutApprovalsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutApprovalsInputSchema;
