import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumConsentTypeWithAggregatesFilterSchema } from './EnumConsentTypeWithAggregatesFilterSchema';
import { ConsentTypeSchema } from './ConsentTypeSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { EnumConsentTemplateStatusWithAggregatesFilterSchema } from './EnumConsentTemplateStatusWithAggregatesFilterSchema';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ConsentTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConsentTemplateScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ConsentTemplateScalarWhereWithAggregatesInputSchema), z.lazy(() => ConsentTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConsentTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConsentTemplateScalarWhereWithAggregatesInputSchema), z.lazy(() => ConsentTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  consentType: z.union([ z.lazy(() => EnumConsentTypeWithAggregatesFilterSchema), z.lazy(() => ConsentTypeSchema) ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  legalText: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  formSchema: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumConsentTemplateStatusWithAggregatesFilterSchema), z.lazy(() => ConsentTemplateStatusSchema) ]).optional(),
  version: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date() ]).optional().nullable(),
  retiredDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  isGlobal: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default ConsentTemplateScalarWhereWithAggregatesInputSchema;
