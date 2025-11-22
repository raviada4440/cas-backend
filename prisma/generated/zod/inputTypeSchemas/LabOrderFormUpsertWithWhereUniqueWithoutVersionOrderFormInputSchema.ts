import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutVersionOrderFormInputSchema } from './LabOrderFormUpdateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema';
import { LabOrderFormCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema';

export const LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema: z.ZodType<Prisma.LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutVersionOrderFormInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema) ]),
});

export default LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema;
