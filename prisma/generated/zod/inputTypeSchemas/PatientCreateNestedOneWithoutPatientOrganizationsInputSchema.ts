import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientCreateWithoutPatientOrganizationsInputSchema } from './PatientCreateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedCreateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { PatientCreateOrConnectWithoutPatientOrganizationsInputSchema } from './PatientCreateOrConnectWithoutPatientOrganizationsInputSchema';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';

export const PatientCreateNestedOneWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutPatientOrganizationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutPatientOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPatientOrganizationsInputSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
});

export default PatientCreateNestedOneWithoutPatientOrganizationsInputSchema;
