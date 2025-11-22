import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateWithoutVersionInputSchema } from './TestCatalogApprovalCreateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema } from './TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogApprovalCreateManyVersionInputEnvelopeSchema } from './TestCatalogApprovalCreateManyVersionInputEnvelopeSchema';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogApprovalScalarWhereInputSchema } from './TestCatalogApprovalScalarWhereInputSchema';

export const TestCatalogApprovalUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogApprovalCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogApprovalScalarWhereInputSchema), z.lazy(() => TestCatalogApprovalScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogApprovalUpdateManyWithoutVersionNestedInputSchema;
