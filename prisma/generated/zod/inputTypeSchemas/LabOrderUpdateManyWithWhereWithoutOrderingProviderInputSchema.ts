import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutOrderingProviderInputSchema } from './LabOrderUncheckedUpdateManyWithoutOrderingProviderInputSchema';

export const LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutOrderingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutOrderingProviderInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutOrderingProviderInputSchema;
