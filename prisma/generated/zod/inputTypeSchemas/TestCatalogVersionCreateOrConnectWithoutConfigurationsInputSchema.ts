import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutConfigurationsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema;
