import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutConfigurationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutConfigurationsInputSchema;
