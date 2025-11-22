import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema;
