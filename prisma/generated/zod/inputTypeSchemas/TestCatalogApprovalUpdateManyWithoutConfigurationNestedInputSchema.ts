import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestCatalogApprovalScalarWhereInputSchema } from './TestCatalogApprovalScalarWhereInputSchema';

export const TestCatalogApprovalUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogApprovalScalarWhereInputSchema), z.lazy(() => TestCatalogApprovalScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogApprovalUpdateManyWithoutConfigurationNestedInputSchema;
