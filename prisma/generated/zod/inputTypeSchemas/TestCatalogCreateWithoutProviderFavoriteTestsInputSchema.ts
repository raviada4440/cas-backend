import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { TestCatalogVersionCreateNestedManyWithoutTestInputSchema } from './TestCatalogVersionCreateNestedManyWithoutTestInputSchema';
import { TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInputSchema';
import { TestCatalogConfigurationCreateNestedManyWithoutTestInputSchema } from './TestCatalogConfigurationCreateNestedManyWithoutTestInputSchema';
import { LabCreateNestedOneWithoutTestCatalogsInputSchema } from './LabCreateNestedOneWithoutTestCatalogsInputSchema';
import { LabOrderTestCreateNestedManyWithoutTestCatalogInputSchema } from './LabOrderTestCreateNestedManyWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema';
import { SponsoredTestCreateNestedManyWithoutTestCatalogInputSchema } from './SponsoredTestCreateNestedManyWithoutTestCatalogInputSchema';
import { TestCatalogAuditLogCreateNestedManyWithoutTestInputSchema } from './TestCatalogAuditLogCreateNestedManyWithoutTestInputSchema';
import { ConsentAuditLogCreateNestedManyWithoutTestInputSchema } from './ConsentAuditLogCreateNestedManyWithoutTestInputSchema';
import { TestGeneCreateNestedManyWithoutTestCatalogInputSchema } from './TestGeneCreateNestedManyWithoutTestCatalogInputSchema';

export const TestCatalogCreateWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutProviderFavoriteTestsInput> = z.strictObject({
  id: z.string().optional(),
  casandraTestId: z.string(),
  labTestId: z.string().optional().nullable(),
  testName: z.string().optional().nullable(),
  specialNotes: z.string().optional().nullable(),
  testCategory: z.string().optional().nullable(),
  testSubCategory: z.string().optional().nullable(),
  status: z.lazy(() => TestCatalogStatusSchema).optional(),
  currentVersion: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  versions: z.lazy(() => TestCatalogVersionCreateNestedManyWithoutTestInputSchema).optional(),
  defaultVersion: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInputSchema).optional(),
  configurations: z.lazy(() => TestCatalogConfigurationCreateNestedManyWithoutTestInputSchema).optional(),
  lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogsInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  auditLogs: z.lazy(() => TestCatalogAuditLogCreateNestedManyWithoutTestInputSchema).optional(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogCreateNestedManyWithoutTestInputSchema).optional(),
  testGenes: z.lazy(() => TestGeneCreateNestedManyWithoutTestCatalogInputSchema).optional(),
});

export default TestCatalogCreateWithoutProviderFavoriteTestsInputSchema;
