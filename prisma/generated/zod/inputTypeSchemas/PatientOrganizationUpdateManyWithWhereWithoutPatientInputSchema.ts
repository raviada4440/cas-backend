import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationScalarWhereInputSchema } from './PatientOrganizationScalarWhereInputSchema';
import { PatientOrganizationUpdateManyMutationInputSchema } from './PatientOrganizationUpdateManyMutationInputSchema';
import { PatientOrganizationUncheckedUpdateManyWithoutPatientInputSchema } from './PatientOrganizationUncheckedUpdateManyWithoutPatientInputSchema';

export const PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateManyWithWhereWithoutPatientInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PatientOrganizationUpdateManyMutationInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateManyWithoutPatientInputSchema) ]),
});

export default PatientOrganizationUpdateManyWithWhereWithoutPatientInputSchema;
