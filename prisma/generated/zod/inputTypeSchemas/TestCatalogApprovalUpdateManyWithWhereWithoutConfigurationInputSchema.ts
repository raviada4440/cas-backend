import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalScalarWhereInputSchema } from './TestCatalogApprovalScalarWhereInputSchema';
import { TestCatalogApprovalUpdateManyMutationInputSchema } from './TestCatalogApprovalUpdateManyMutationInputSchema';
import { TestCatalogApprovalUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogApprovalUpdateManyMutationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestCatalogApprovalUpdateManyWithWhereWithoutConfigurationInputSchema;
