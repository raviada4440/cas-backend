import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutPatientInputSchema } from './LabOrderCreateWithoutPatientInputSchema';
import { LabOrderUncheckedCreateWithoutPatientInputSchema } from './LabOrderUncheckedCreateWithoutPatientInputSchema';
import { LabOrderCreateOrConnectWithoutPatientInputSchema } from './LabOrderCreateOrConnectWithoutPatientInputSchema';
import { LabOrderCreateManyPatientInputEnvelopeSchema } from './LabOrderCreateManyPatientInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutPatientInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutPatientInputSchema), z.lazy(() => LabOrderCreateWithoutPatientInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutPatientInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyPatientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutPatientInputSchema;
