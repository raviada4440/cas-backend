import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithoutConfigurationInputSchema } from './TestCatalogApprovalUpdateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema';

export const TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogApprovalUpdateWithWhereUniqueWithoutConfigurationInputSchema;
