import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';
import { PatientCreateWithoutLabOrdersInputSchema } from './PatientCreateWithoutLabOrdersInputSchema';
import { PatientUncheckedCreateWithoutLabOrdersInputSchema } from './PatientUncheckedCreateWithoutLabOrdersInputSchema';

export const PatientCreateOrConnectWithoutLabOrdersInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientCreateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedCreateWithoutLabOrdersInputSchema) ]),
});

export default PatientCreateOrConnectWithoutLabOrdersInputSchema;
