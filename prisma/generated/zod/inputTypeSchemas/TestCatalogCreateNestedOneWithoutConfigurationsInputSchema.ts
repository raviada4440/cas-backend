import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutConfigurationsInputSchema } from './TestCatalogCreateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogCreateOrConnectWithoutConfigurationsInputSchema } from './TestCatalogCreateOrConnectWithoutConfigurationsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutConfigurationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConfigurationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutConfigurationsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutConfigurationsInputSchema;
