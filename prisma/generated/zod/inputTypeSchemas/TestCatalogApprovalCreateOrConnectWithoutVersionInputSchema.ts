import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalCreateWithoutVersionInputSchema } from './TestCatalogApprovalCreateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogApprovalCreateOrConnectWithoutVersionInputSchema;
