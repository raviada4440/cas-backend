import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithoutOrganizationInputSchema } from './PatientOrganizationUpdateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema';
import { PatientOrganizationCreateWithoutOrganizationInputSchema } from './PatientOrganizationCreateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PatientOrganizationUpdateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema;
