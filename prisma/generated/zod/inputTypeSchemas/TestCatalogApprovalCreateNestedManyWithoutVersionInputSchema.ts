import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateWithoutVersionInputSchema } from './TestCatalogApprovalCreateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema } from './TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogApprovalCreateManyVersionInputEnvelopeSchema } from './TestCatalogApprovalCreateManyVersionInputEnvelopeSchema';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';

export const TestCatalogApprovalCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogApprovalCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogApprovalCreateNestedManyWithoutVersionInputSchema;
