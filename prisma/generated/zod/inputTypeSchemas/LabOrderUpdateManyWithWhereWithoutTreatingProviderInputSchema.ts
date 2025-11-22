import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutTreatingProviderInputSchema } from './LabOrderUncheckedUpdateManyWithoutTreatingProviderInputSchema';

export const LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutTreatingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutTreatingProviderInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutTreatingProviderInputSchema;
