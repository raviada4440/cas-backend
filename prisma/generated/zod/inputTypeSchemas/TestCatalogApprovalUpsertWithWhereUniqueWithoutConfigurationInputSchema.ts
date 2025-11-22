import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';
import { TestCatalogApprovalUpdateWithoutConfigurationInputSchema } from './TestCatalogApprovalUpdateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogApprovalUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogApprovalUpsertWithWhereUniqueWithoutConfigurationInputSchema;
