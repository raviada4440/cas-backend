import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema';

export const ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutTreatingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutTreatingProviderLabOrdersInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutTreatingProviderLabOrdersInputSchema;
