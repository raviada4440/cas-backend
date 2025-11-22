import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';
import { LabOrderUpdateManyMutationInputSchema } from './LabOrderUpdateManyMutationInputSchema';
import { LabOrderUncheckedUpdateManyWithoutOrganizationInputSchema } from './LabOrderUncheckedUpdateManyWithoutOrganizationInputSchema';

export const LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => LabOrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateManyMutationInputSchema), z.lazy(() => LabOrderUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema;
