import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutPatientInputSchema } from './LabOrderCreateWithoutPatientInputSchema';
import { LabOrderUncheckedCreateWithoutPatientInputSchema } from './LabOrderUncheckedCreateWithoutPatientInputSchema';

export const LabOrderCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutPatientInputSchema;
