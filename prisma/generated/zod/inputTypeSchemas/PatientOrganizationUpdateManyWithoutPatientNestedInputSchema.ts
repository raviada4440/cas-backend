import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateWithoutPatientInputSchema } from './PatientOrganizationCreateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedCreateWithoutPatientInputSchema } from './PatientOrganizationUncheckedCreateWithoutPatientInputSchema';
import { PatientOrganizationCreateOrConnectWithoutPatientInputSchema } from './PatientOrganizationCreateOrConnectWithoutPatientInputSchema';
import { PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema } from './PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema';
import { PatientOrganizationCreateManyPatientInputEnvelopeSchema } from './PatientOrganizationCreateManyPatientInputEnvelopeSchema';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema } from './PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema';
import { PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema } from './PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema';
import { PatientOrganizationScalarWhereInputSchema } from './PatientOrganizationScalarWhereInputSchema';

export const PatientOrganizationUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateManyWithoutPatientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema).array(), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientOrganizationCreateOrConnectWithoutPatientInputSchema), z.lazy(() => PatientOrganizationCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientOrganizationCreateManyPatientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PatientOrganizationScalarWhereInputSchema), z.lazy(() => PatientOrganizationScalarWhereInputSchema).array() ]).optional(),
});

export default PatientOrganizationUpdateManyWithoutPatientNestedInputSchema;
