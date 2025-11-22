import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithoutVersionInputSchema } from './TestCatalogApprovalUpdateWithoutVersionInputSchema';
import { TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogApprovalUpdateWithWhereUniqueWithoutVersionInputSchema;
