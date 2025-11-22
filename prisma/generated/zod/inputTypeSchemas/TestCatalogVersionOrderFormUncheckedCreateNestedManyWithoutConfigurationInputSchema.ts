import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';

export const TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutConfigurationInputSchema;
