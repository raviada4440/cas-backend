import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientUpdateWithoutLabOrdersInputSchema } from './PatientUpdateWithoutLabOrdersInputSchema';
import { PatientUncheckedUpdateWithoutLabOrdersInputSchema } from './PatientUncheckedUpdateWithoutLabOrdersInputSchema';
import { PatientCreateWithoutLabOrdersInputSchema } from './PatientCreateWithoutLabOrdersInputSchema';
import { PatientUncheckedCreateWithoutLabOrdersInputSchema } from './PatientUncheckedCreateWithoutLabOrdersInputSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';

export const PatientUpsertWithoutLabOrdersInputSchema: z.ZodType<Prisma.PatientUpsertWithoutLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => PatientUpdateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => PatientCreateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedCreateWithoutLabOrdersInputSchema) ]),
  where: z.lazy(() => PatientWhereInputSchema).optional(),
});

export default PatientUpsertWithoutLabOrdersInputSchema;
