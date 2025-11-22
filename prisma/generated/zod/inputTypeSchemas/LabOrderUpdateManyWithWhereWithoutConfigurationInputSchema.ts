import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutConfigurationInputSchema } from './LabOrderUncheckedUpdateManyWithoutConfigurationInputSchema';

export const LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutConfigurationInputSchema;
