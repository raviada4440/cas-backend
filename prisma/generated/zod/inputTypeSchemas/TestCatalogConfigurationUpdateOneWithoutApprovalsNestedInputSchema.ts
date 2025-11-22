import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUpsertWithoutApprovalsInputSchema } from './TestCatalogConfigurationUpsertWithoutApprovalsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUpdateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema';

export const TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutApprovalsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInputSchema;
