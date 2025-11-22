import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutOrderingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutOrderingProviderLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutOrderingProviderLabOrdersInputSchema;
