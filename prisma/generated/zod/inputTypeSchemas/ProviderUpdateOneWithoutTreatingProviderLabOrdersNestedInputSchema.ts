import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUpsertWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUpsertWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema';

export const ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInputSchema: z.ZodType<Prisma.ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutTreatingProviderLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutTreatingProviderLabOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema) ]).optional(),
});

export default ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInputSchema;
