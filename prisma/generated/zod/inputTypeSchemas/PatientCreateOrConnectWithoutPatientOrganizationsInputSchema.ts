import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';
import { PatientCreateWithoutPatientOrganizationsInputSchema } from './PatientCreateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedCreateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedCreateWithoutPatientOrganizationsInputSchema';

export const PatientCreateOrConnectWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutPatientOrganizationsInput> = z.strictObject({
  where: z.lazy(() => PatientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutPatientOrganizationsInputSchema) ]),
});

export default PatientCreateOrConnectWithoutPatientOrganizationsInputSchema;
