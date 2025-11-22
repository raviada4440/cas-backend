import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema;
