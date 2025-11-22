import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { PatientUpdateWithoutPatientOrganizationsInputSchema } from './PatientUpdateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema';

export const PatientUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPatientOrganizationsInput> = z.strictObject({
  where: z.lazy(() => PatientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PatientUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]),
});

export default PatientUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema;
