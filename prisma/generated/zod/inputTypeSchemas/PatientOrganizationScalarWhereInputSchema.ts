import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PatientOrganizationScalarWhereInputSchema: z.ZodType<Prisma.PatientOrganizationScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PatientOrganizationScalarWhereInputSchema), z.lazy(() => PatientOrganizationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientOrganizationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientOrganizationScalarWhereInputSchema), z.lazy(() => PatientOrganizationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  patientId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  mrn: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default PatientOrganizationScalarWhereInputSchema;
