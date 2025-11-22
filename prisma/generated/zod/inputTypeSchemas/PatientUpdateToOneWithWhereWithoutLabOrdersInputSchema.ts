import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { PatientUpdateWithoutLabOrdersInputSchema } from './PatientUpdateWithoutLabOrdersInputSchema';
import { PatientUncheckedUpdateWithoutLabOrdersInputSchema } from './PatientUncheckedUpdateWithoutLabOrdersInputSchema';

export const PatientUpdateToOneWithWhereWithoutLabOrdersInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => PatientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PatientUpdateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutLabOrdersInputSchema) ]),
});

export default PatientUpdateToOneWithWhereWithoutLabOrdersInputSchema;
