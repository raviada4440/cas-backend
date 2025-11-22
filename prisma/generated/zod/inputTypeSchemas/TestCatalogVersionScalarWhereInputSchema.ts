import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumTestCatalogVersionStatusFilterSchema } from './EnumTestCatalogVersionStatusFilterSchema';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionScalarWhereInputSchema), z.lazy(() => TestCatalogVersionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionScalarWhereInputSchema), z.lazy(() => TestCatalogVersionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionNumber: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumTestCatalogVersionStatusFilterSchema), z.lazy(() => TestCatalogVersionStatusSchema) ]).optional(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  retiredDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  changeReason: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changeNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName1: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName2: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName3: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName4: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternativeName5: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testIncludes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  methodology: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  diseases: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  probes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalSignificance: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  diseaseIndications: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testUsage: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testLimitations: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isNewYorkApproved: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  levelOfService: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  turnAroundTime: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  referenceRanges: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  setupSchedule: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testSubCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientResources: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerResources: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientResourcesUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerResourcesUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  additionalNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isFDAApproved: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionScalarWhereInputSchema;
