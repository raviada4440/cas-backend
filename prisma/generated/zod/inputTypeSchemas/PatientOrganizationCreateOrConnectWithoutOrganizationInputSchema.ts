import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationCreateWithoutOrganizationInputSchema } from './PatientOrganizationCreateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema';

export const PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => PatientOrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema;
