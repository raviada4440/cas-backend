import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutPatientInputSchema } from './LabOrderUpdateWithoutPatientInputSchema';
import { LabOrderUncheckedUpdateWithoutPatientInputSchema } from './LabOrderUncheckedUpdateWithoutPatientInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutPatientInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema;
