import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';
import { PatientOrganizationListRelationFilterSchema } from './PatientOrganizationListRelationFilterSchema';

export const PatientWhereUniqueInputSchema: z.ZodType<Prisma.PatientWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PatientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  dateOfBirth: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  addressLine1: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  addressLine2: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationListRelationFilterSchema).optional(),
}));

export default PatientWhereUniqueInputSchema;
