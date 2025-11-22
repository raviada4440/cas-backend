import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithoutPatientInputSchema } from './PatientOrganizationUpdateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedUpdateWithoutPatientInputSchema } from './PatientOrganizationUncheckedUpdateWithoutPatientInputSchema';
import { PatientOrganizationCreateWithoutPatientInputSchema } from './PatientOrganizationCreateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedCreateWithoutPatientInputSchema } from './PatientOrganizationUncheckedCreateWithoutPatientInputSchema';

export const PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationUpsertWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PatientOrganizationUpdateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateWithoutPatientInputSchema) ]),
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema) ]),
});

export default PatientOrganizationUpsertWithWhereUniqueWithoutPatientInputSchema;
