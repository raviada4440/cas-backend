import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationCreateWithoutPatientInputSchema } from './PatientOrganizationCreateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedCreateWithoutPatientInputSchema } from './PatientOrganizationUncheckedCreateWithoutPatientInputSchema';

export const PatientOrganizationCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationCreateOrConnectWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutPatientInputSchema) ]),
});

export default PatientOrganizationCreateOrConnectWithoutPatientInputSchema;
