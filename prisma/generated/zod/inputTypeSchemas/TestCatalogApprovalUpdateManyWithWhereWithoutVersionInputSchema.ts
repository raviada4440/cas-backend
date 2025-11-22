import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalScalarWhereInputSchema } from './TestCatalogApprovalScalarWhereInputSchema';
import { TestCatalogApprovalUpdateManyMutationInputSchema } from './TestCatalogApprovalUpdateManyMutationInputSchema';
import { TestCatalogApprovalUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogApprovalUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogApprovalUpdateManyMutationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogApprovalUpdateManyWithWhereWithoutVersionInputSchema;
