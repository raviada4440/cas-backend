import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema';
import { LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema } from './LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';

export const LabOrderFormCreateNestedManyWithoutVersionOrderFormInputSchema: z.ZodType<Prisma.LabOrderFormCreateNestedManyWithoutVersionOrderFormInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderFormCreateNestedManyWithoutVersionOrderFormInputSchema;
