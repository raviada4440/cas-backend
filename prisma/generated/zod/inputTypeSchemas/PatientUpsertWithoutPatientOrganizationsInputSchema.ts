import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientUpdateWithoutPatientOrganizationsInputSchema } from './PatientUpdateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema';
import { PatientCreateWithoutPatientOrganizationsInputSchema } from './PatientCreateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedCreateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';

export const PatientUpsertWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.PatientUpsertWithoutPatientOrganizationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => PatientUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => PatientCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutPatientOrganizationsInputSchema) ]),
  where: z.lazy(() => PatientWhereInputSchema).optional(),
});

export default PatientUpsertWithoutPatientOrganizationsInputSchema;
