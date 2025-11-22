import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderScalarWhereInputSchema: z.ZodType<Prisma.LabOrderScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  orderNumber: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  accessionNumber: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  testVersionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testConfigurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  orderingProviderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  treatingProviderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  patientId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  patientMRN: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientMobile: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientEmail: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalDetails: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalPresentation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalTesting: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  riskFlags: z.lazy(() => JsonNullableFilterSchema).optional(),
  riskFlagNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalAttachments: z.lazy(() => JsonNullableFilterSchema).optional(),
  orderDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  orderNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderScalarWhereInputSchema;
