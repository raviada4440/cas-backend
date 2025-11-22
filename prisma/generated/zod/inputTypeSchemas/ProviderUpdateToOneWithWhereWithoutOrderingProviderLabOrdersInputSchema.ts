import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema';

export const ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInputSchema;
