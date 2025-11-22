import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LabOrderConsentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabOrderConsentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderConsentScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderConsentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderConsentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderConsentScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderConsentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  versionConsentId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  consentTemplateId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  consentTitle: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  consentContent: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isAccepted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  acceptedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date() ]).optional().nullable(),
  declinedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date() ]).optional().nullable(),
  patientSignature: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  witnessSignature: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  consentVersion: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  collectedBy: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  collectedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default LabOrderConsentScalarWhereWithAggregatesInputSchema;
