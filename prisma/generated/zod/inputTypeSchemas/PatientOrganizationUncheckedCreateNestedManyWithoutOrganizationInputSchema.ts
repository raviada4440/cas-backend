import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateWithoutOrganizationInputSchema } from './PatientOrganizationCreateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { PatientOrganizationCreateManyOrganizationInputEnvelopeSchema } from './PatientOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';

export const PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema).array(), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
});

export default PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema;
