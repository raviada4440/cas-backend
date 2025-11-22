import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithoutOrganizationInputSchema } from './PatientOrganizationUpdateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema';

export const PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PatientOrganizationUpdateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema;
