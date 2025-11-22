import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema } from './TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema';
import { TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema } from './TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema';
import { TestCatalogApprovalWhereUniqueInputSchema } from './TestCatalogApprovalWhereUniqueInputSchema';

export const TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestCatalogApprovalCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogApprovalCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema), z.lazy(() => TestCatalogApprovalWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogApprovalUncheckedCreateNestedManyWithoutConfigurationInputSchema;
