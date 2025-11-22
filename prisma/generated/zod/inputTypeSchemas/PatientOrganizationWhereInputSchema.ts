import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrganizationScalarRelationFilterSchema } from './OrganizationScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';

export const PatientOrganizationWhereInputSchema: z.ZodType<Prisma.PatientOrganizationWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PatientOrganizationWhereInputSchema), z.lazy(() => PatientOrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientOrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientOrganizationWhereInputSchema), z.lazy(() => PatientOrganizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  patientId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  mrn: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  patient: z.union([ z.lazy(() => PatientScalarRelationFilterSchema), z.lazy(() => PatientWhereInputSchema) ]).optional(),
});

export default PatientOrganizationWhereInputSchema;
