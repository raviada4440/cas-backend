import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateWithoutOrganizationInputSchema } from './PatientOrganizationCreateWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema';
import { PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema } from './PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema';
import { PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { PatientOrganizationCreateManyOrganizationInputEnvelopeSchema } from './PatientOrganizationCreateManyOrganizationInputEnvelopeSchema';
import { PatientOrganizationWhereUniqueInputSchema } from './PatientOrganizationWhereUniqueInputSchema';
import { PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema } from './PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema';
import { PatientOrganizationScalarWhereInputSchema } from './PatientOrganizationScalarWhereInputSchema';

export const PatientOrganizationUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationCreateWithoutOrganizationInputSchema).array(), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PatientOrganizationCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PatientOrganizationWhereUniqueInputSchema), z.lazy(() => PatientOrganizationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => PatientOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PatientOrganizationScalarWhereInputSchema), z.lazy(() => PatientOrganizationScalarWhereInputSchema).array() ]).optional(),
});

export default PatientOrganizationUpdateManyWithoutOrganizationNestedInputSchema;
