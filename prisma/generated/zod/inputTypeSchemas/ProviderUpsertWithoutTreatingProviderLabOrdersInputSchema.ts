import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutTreatingProviderLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutTreatingProviderLabOrdersInputSchema;
