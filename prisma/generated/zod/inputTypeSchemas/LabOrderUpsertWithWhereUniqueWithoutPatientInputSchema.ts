import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutPatientInputSchema } from './LabOrderUpdateWithoutPatientInputSchema';
import { LabOrderUncheckedUpdateWithoutPatientInputSchema } from './LabOrderUncheckedUpdateWithoutPatientInputSchema';
import { LabOrderCreateWithoutPatientInputSchema } from './LabOrderCreateWithoutPatientInputSchema';
import { LabOrderUncheckedCreateWithoutPatientInputSchema } from './LabOrderUncheckedCreateWithoutPatientInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutPatientInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema;
