import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereInputSchema } from './LabOrderConsentWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderScalarRelationFilterSchema } from './LabOrderScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { TestCatalogVersionConsentNullableScalarRelationFilterSchema } from './TestCatalogVersionConsentNullableScalarRelationFilterSchema';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';
import { ConsentTemplateScalarRelationFilterSchema } from './ConsentTemplateScalarRelationFilterSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const LabOrderConsentWhereUniqueInputSchema: z.ZodType<Prisma.LabOrderConsentWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => LabOrderConsentWhereInputSchema), z.lazy(() => LabOrderConsentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderConsentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderConsentWhereInputSchema), z.lazy(() => LabOrderConsentWhereInputSchema).array() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionConsentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  consentTemplateId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  consentTitle: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  consentContent: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isAccepted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  acceptedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  declinedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  patientSignature: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  witnessSignature: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  consentVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  collectedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  collectedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  consent: z.union([ z.lazy(() => TestCatalogVersionConsentNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionConsentWhereInputSchema) ]).optional().nullable(),
  consentTemplate: z.union([ z.lazy(() => ConsentTemplateScalarRelationFilterSchema), z.lazy(() => ConsentTemplateWhereInputSchema) ]).optional(),
}));

export default LabOrderConsentWhereUniqueInputSchema;
