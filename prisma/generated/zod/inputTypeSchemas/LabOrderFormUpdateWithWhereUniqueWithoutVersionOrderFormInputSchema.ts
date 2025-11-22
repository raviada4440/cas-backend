import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutVersionOrderFormInputSchema } from './LabOrderFormUpdateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema';

export const LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema: z.ZodType<Prisma.LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema) ]),
});

export default LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema;
