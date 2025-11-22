import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientCreateWithoutPatientOrganizationsInputSchema } from './PatientCreateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedCreateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { PatientCreateOrConnectWithoutPatientOrganizationsInputSchema } from './PatientCreateOrConnectWithoutPatientOrganizationsInputSchema';
import { PatientUpsertWithoutPatientOrganizationsInputSchema } from './PatientUpsertWithoutPatientOrganizationsInputSchema';
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema';
import { PatientUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema } from './PatientUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema';
import { PatientUpdateWithoutPatientOrganizationsInputSchema } from './PatientUpdateWithoutPatientOrganizationsInputSchema';
import { PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema';

export const PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedCreateWithoutPatientOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPatientOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutPatientOrganizationsInputSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PatientUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => PatientUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]).optional(),
});

export default PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema;
