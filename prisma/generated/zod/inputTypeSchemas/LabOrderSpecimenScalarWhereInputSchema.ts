import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderSpecimenScalarWhereInputSchema: z.ZodType<Prisma.LabOrderSpecimenScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderSpecimenScalarWhereInputSchema), z.lazy(() => LabOrderSpecimenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderSpecimenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderSpecimenScalarWhereInputSchema), z.lazy(() => LabOrderSpecimenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  specimenType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specimenCount: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  collectedDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  collectedTime: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specimenId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  bodySite: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  tumorType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  fixative: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  fixativeDuration: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  coldIschemicTime: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientAddress1: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientAddress2: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientCity: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientState: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientZip: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  pscLab: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  pscLocation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  pscAppointmentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  pscAppointmentTime: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderSpecimenScalarWhereInputSchema;
