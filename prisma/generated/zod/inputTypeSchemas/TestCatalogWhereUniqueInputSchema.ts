import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogLabIdLabTestIdCompoundUniqueInputSchema } from './TestCatalogLabIdLabTestIdCompoundUniqueInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTestCatalogStatusFilterSchema } from './EnumTestCatalogStatusFilterSchema';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionListRelationFilterSchema } from './TestCatalogVersionListRelationFilterSchema';
import { TestCatalogVersionNullableScalarRelationFilterSchema } from './TestCatalogVersionNullableScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogConfigurationListRelationFilterSchema } from './TestCatalogConfigurationListRelationFilterSchema';
import { LabNullableScalarRelationFilterSchema } from './LabNullableScalarRelationFilterSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabOrderTestListRelationFilterSchema } from './LabOrderTestListRelationFilterSchema';
import { OrganizationFavoriteTestListRelationFilterSchema } from './OrganizationFavoriteTestListRelationFilterSchema';
import { ProviderFavoriteTestListRelationFilterSchema } from './ProviderFavoriteTestListRelationFilterSchema';
import { SponsoredTestListRelationFilterSchema } from './SponsoredTestListRelationFilterSchema';
import { TestCatalogAuditLogListRelationFilterSchema } from './TestCatalogAuditLogListRelationFilterSchema';
import { ConsentAuditLogListRelationFilterSchema } from './ConsentAuditLogListRelationFilterSchema';
import { TestGeneListRelationFilterSchema } from './TestGeneListRelationFilterSchema';

export const TestCatalogWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    labId_labTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    labId_labTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  labId_labTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogWhereInputSchema), z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogWhereInputSchema), z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  casandraTestId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  testSubCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTestCatalogStatusFilterSchema), z.lazy(() => TestCatalogStatusSchema) ]).optional(),
  defaultVersionId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  currentVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  versions: z.lazy(() => TestCatalogVersionListRelationFilterSchema).optional(),
  defaultVersion: z.union([ z.lazy(() => TestCatalogVersionNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional().nullable(),
  configurations: z.lazy(() => TestCatalogConfigurationListRelationFilterSchema).optional(),
  lab: z.union([ z.lazy(() => LabNullableScalarRelationFilterSchema), z.lazy(() => LabWhereInputSchema) ]).optional().nullable(),
  labOrderTests: z.lazy(() => LabOrderTestListRelationFilterSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestListRelationFilterSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestListRelationFilterSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestListRelationFilterSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogListRelationFilterSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogListRelationFilterSchema).optional(),
  testGenes: z.lazy(() => TestGeneListRelationFilterSchema).optional(),
}));

export default TestCatalogWhereUniqueInputSchema;
