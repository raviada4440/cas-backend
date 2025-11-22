import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema';

export const LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema: z.ZodType<Prisma.LabOrderFormCreateOrConnectWithoutVersionOrderFormInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema) ]),
});

export default LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema;
