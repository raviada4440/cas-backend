import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';
import { LabOrderFormUpdateManyMutationInputSchema } from './LabOrderFormUpdateManyMutationInputSchema';
import { LabOrderFormUncheckedUpdateManyWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedUpdateManyWithoutVersionOrderFormInputSchema';

export const LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema: z.ZodType<Prisma.LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateManyMutationInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateManyWithoutVersionOrderFormInputSchema) ]),
});

export default LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema;
