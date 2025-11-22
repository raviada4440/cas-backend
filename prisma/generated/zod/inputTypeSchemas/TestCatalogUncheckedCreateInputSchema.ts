import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { TestCatalogVersionUncheckedCreateNestedManyWithoutTestInputSchema } from './TestCatalogVersionUncheckedCreateNestedManyWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInputSchema';
import { LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema';
import { TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInputSchema';
import { ConsentAuditLogUncheckedCreateNestedManyWithoutTestInputSchema } from './ConsentAuditLogUncheckedCreateNestedManyWithoutTestInputSchema';
import { TestGeneUncheckedCreateNestedManyWithoutTestCatalogInputSchema } from './TestGeneUncheckedCreateNestedManyWithoutTestCatalogInputSchema';

export const TestCatalogUncheckedCreateInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  labTestId: z.string().optional().nullable(),
  testName: z.string().optional().nullable(),
  specialNotes: z.string().optional().nullable(),
  testCategory: z.string().optional().nullable(),
  testSubCategory: z.string().optional().nullable(),
  status: z.lazy(() => TestCatalogStatusSchema).optional(),
  defaultVersionId: z.string().optional().nullable(),
  currentVersion: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  versions: z.lazy(() => TestCatalogVersionUncheckedCreateNestedManyWithoutTestInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogUncheckedCreateNestedManyWithoutTestInputSchema).optional(),
  testGenes: z.lazy(() => TestGeneUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
});

export default TestCatalogUncheckedCreateInputSchema;
