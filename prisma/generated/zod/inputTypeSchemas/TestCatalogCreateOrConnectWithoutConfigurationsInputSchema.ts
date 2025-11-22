import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutConfigurationsInputSchema } from './TestCatalogCreateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedCreateWithoutConfigurationsInputSchema';

export const TestCatalogCreateOrConnectWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutConfigurationsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConfigurationsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutConfigurationsInputSchema;
