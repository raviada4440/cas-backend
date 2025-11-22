import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientCreateWithoutLabOrdersInputSchema } from './PatientCreateWithoutLabOrdersInputSchema';
import { PatientUncheckedCreateWithoutLabOrdersInputSchema } from './PatientUncheckedCreateWithoutLabOrdersInputSchema';
import { PatientCreateOrConnectWithoutLabOrdersInputSchema } from './PatientCreateOrConnectWithoutLabOrdersInputSchema';
import { PatientUpsertWithoutLabOrdersInputSchema } from './PatientUpsertWithoutLabOrdersInputSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';
import { PatientUpdateToOneWithWhereWithoutLabOrdersInputSchema } from './PatientUpdateToOneWithWhereWithoutLabOrdersInputSchema';
import { PatientUpdateWithoutLabOrdersInputSchema } from './PatientUpdateWithoutLabOrdersInputSchema';
import { PatientUncheckedUpdateWithoutLabOrdersInputSchema } from './PatientUncheckedUpdateWithoutLabOrdersInputSchema';

export const PatientUpdateOneWithoutLabOrdersNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneWithoutLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutLabOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PatientWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PatientWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PatientUpdateToOneWithWhereWithoutLabOrdersInputSchema), z.lazy(() => PatientUpdateWithoutLabOrdersInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutLabOrdersInputSchema) ]).optional(),
});

export default PatientUpdateOneWithoutLabOrdersNestedInputSchema;
