import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInputSchema;
