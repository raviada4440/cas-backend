import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateWithoutPatientInputSchema } from './PatientOrganizationCreateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedCreateWithoutPatientInputSchema } from './PatientOrganizationUncheckedCreateWithoutPatientInputSchema';
import { PatientOrganizationCreateOrConnectWithoutPatientInputSchema } from './PatientOrganizationCreateOrConnectWithoutPatientInputSchema';
import { PatientOrganizationCreateManyPatientInputEnvelopeSchema } from './PatientOrganizationCreateManyPatientInputEnvelopeSchema';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';

export const PatientOrganizationUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationUncheckedCreateNestedManyWithoutPatientInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema).array(), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientOrganizationCreateOrConnectWithoutPatientInputSchema), z.lazy(() => PatientOrganizationCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientOrganizationCreateManyPatientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
});

export default PatientOrganizationUncheckedCreateNestedManyWithoutPatientInputSchema;
