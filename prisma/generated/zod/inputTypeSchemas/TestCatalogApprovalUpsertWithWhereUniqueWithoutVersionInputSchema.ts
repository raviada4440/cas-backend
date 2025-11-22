import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithoutVersionInputSchema } from './TestCatalogApprovalUpdateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogApprovalCreateWithoutVersionInputSchema } from './TestCatalogApprovalCreateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogApprovalUpsertWithWhereUniqueWithoutVersionInputSchema;
