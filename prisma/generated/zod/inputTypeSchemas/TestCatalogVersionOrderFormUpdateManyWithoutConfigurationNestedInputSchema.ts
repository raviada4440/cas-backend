import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';

export const TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormUpdateManyWithoutConfigurationNestedInputSchema;
