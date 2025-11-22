import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientCreateWithoutLabOrdersInputSchema } from './PatientCreateWithoutLabOrdersInputSchema';
import { PatientUncheckedCreateWithoutLabOrdersInputSchema } from './PatientUncheckedCreateWithoutLabOrdersInputSchema';
import { PatientCreateOrConnectWithoutLabOrdersInputSchema } from './PatientCreateOrConnectWithoutLabOrdersInputSchema';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';

export const PatientCreateNestedOneWithoutLabOrdersInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
});

export default PatientCreateNestedOneWithoutLabOrdersInputSchema;
