import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionConsentScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema), z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema), z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  consentTemplateId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  displayOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customTitle: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  customContent: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  conditionalLogic: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  dependsOnConsent: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionConsentScalarWhereInputSchema;
