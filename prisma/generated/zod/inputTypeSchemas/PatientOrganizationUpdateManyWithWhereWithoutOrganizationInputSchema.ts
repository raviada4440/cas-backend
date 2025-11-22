import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationScalarWhereInputSchema } from './PatientOrganizationScalarWhereInputSchema';
import { PatientOrganizationUpdateManyMutationInputSchema } from './PatientOrganizationUpdateManyMutationInputSchema';
import { PatientOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema';

export const PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PatientOrganizationUpdateManyMutationInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema;
