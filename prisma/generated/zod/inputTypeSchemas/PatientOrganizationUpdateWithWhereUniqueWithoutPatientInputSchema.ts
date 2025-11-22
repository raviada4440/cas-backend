import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithoutPatientInputSchema } from './PatientOrganizationUpdateWithoutPatientInputSchema';
import { PatientOrganizationUncheckedUpdateWithoutPatientInputSchema } from './PatientOrganizationUncheckedUpdateWithoutPatientInputSchema';

export const PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateWithWhereUniqueWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PatientOrganizationUpdateWithoutPatientInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateWithoutPatientInputSchema) ]),
});

export default PatientOrganizationUpdateWithWhereUniqueWithoutPatientInputSchema;
