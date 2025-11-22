import { z } from 'zod';
import { TestCatalogStatusSchema } from '../inputTypeSchemas/TestCatalogStatusSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { LabWithRelationsSchema, LabPartialWithRelationsSchema } from './LabSchema'
import type { LabWithRelations, LabPartialWithRelations } from './LabSchema'
import { LabOrderTestWithRelationsSchema, LabOrderTestPartialWithRelationsSchema } from './LabOrderTestSchema'
import type { LabOrderTestWithRelations, LabOrderTestPartialWithRelations } from './LabOrderTestSchema'
import { OrganizationFavoriteTestWithRelationsSchema, OrganizationFavoriteTestPartialWithRelationsSchema } from './OrganizationFavoriteTestSchema'
import type { OrganizationFavoriteTestWithRelations, OrganizationFavoriteTestPartialWithRelations } from './OrganizationFavoriteTestSchema'
import { ProviderFavoriteTestWithRelationsSchema, ProviderFavoriteTestPartialWithRelationsSchema } from './ProviderFavoriteTestSchema'
import type { ProviderFavoriteTestWithRelations, ProviderFavoriteTestPartialWithRelations } from './ProviderFavoriteTestSchema'
import { SponsoredTestWithRelationsSchema, SponsoredTestPartialWithRelationsSchema } from './SponsoredTestSchema'
import type { SponsoredTestWithRelations, SponsoredTestPartialWithRelations } from './SponsoredTestSchema'
import { TestCatalogAuditLogWithRelationsSchema, TestCatalogAuditLogPartialWithRelationsSchema } from './TestCatalogAuditLogSchema'
import type { TestCatalogAuditLogWithRelations, TestCatalogAuditLogPartialWithRelations } from './TestCatalogAuditLogSchema'
import { ConsentAuditLogWithRelationsSchema, ConsentAuditLogPartialWithRelationsSchema } from './ConsentAuditLogSchema'
import type { ConsentAuditLogWithRelations, ConsentAuditLogPartialWithRelations } from './ConsentAuditLogSchema'
import { TestGeneWithRelationsSchema, TestGenePartialWithRelationsSchema } from './TestGeneSchema'
import type { TestGeneWithRelations, TestGenePartialWithRelations } from './TestGeneSchema'

/////////////////////////////////////////
// TEST CATALOG SCHEMA
/////////////////////////////////////////

export const TestCatalogSchema = z.object({
  status: TestCatalogStatusSchema,
  id: z.string(),
  labId: z.string().nullable(),
  casandraTestId: z.string(),
  labTestId: z.string().nullable(),
  testName: z.string().nullable(),
  specialNotes: z.string().nullable(),
  testCategory: z.string().nullable(),
  testSubCategory: z.string().nullable(),
  defaultVersionId: z.string().nullable(),
  currentVersion: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalog = z.infer<typeof TestCatalogSchema>

/////////////////////////////////////////
// TEST CATALOG PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogPartialSchema = TestCatalogSchema.partial()

export type TestCatalogPartial = z.infer<typeof TestCatalogPartialSchema>

/////////////////////////////////////////
// TEST CATALOG RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogRelations = {
  versions: TestCatalogVersionWithRelations[];
  defaultVersion?: TestCatalogVersionWithRelations | null;
  configurations: TestCatalogConfigurationWithRelations[];
  lab?: LabWithRelations | null;
  labOrderTests: LabOrderTestWithRelations[];
  organizationFavoriteTests: OrganizationFavoriteTestWithRelations[];
  providerFavoriteTests: ProviderFavoriteTestWithRelations[];
  sponsoredTests: SponsoredTestWithRelations[];
  auditLogs: TestCatalogAuditLogWithRelations[];
  consentAuditLogs: ConsentAuditLogWithRelations[];
  testGenes: TestGeneWithRelations[];
};

export type TestCatalogWithRelations = z.infer<typeof TestCatalogSchema> & TestCatalogRelations

export const TestCatalogWithRelationsSchema: z.ZodType<TestCatalogWithRelations> = TestCatalogSchema.merge(z.object({
  versions: z.lazy(() => TestCatalogVersionWithRelationsSchema).array(),
  defaultVersion: z.lazy(() => TestCatalogVersionWithRelationsSchema).nullable(),
  configurations: z.lazy(() => TestCatalogConfigurationWithRelationsSchema).array(),
  lab: z.lazy(() => LabWithRelationsSchema).nullable(),
  labOrderTests: z.lazy(() => LabOrderTestWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestWithRelationsSchema).array(),
  sponsoredTests: z.lazy(() => SponsoredTestWithRelationsSchema).array(),
  auditLogs: z.lazy(() => TestCatalogAuditLogWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogWithRelationsSchema).array(),
  testGenes: z.lazy(() => TestGeneWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogPartialRelations = {
  versions?: TestCatalogVersionPartialWithRelations[];
  defaultVersion?: TestCatalogVersionPartialWithRelations | null;
  configurations?: TestCatalogConfigurationPartialWithRelations[];
  lab?: LabPartialWithRelations | null;
  labOrderTests?: LabOrderTestPartialWithRelations[];
  organizationFavoriteTests?: OrganizationFavoriteTestPartialWithRelations[];
  providerFavoriteTests?: ProviderFavoriteTestPartialWithRelations[];
  sponsoredTests?: SponsoredTestPartialWithRelations[];
  auditLogs?: TestCatalogAuditLogPartialWithRelations[];
  consentAuditLogs?: ConsentAuditLogPartialWithRelations[];
  testGenes?: TestGenePartialWithRelations[];
};

export type TestCatalogPartialWithRelations = z.infer<typeof TestCatalogPartialSchema> & TestCatalogPartialRelations

export const TestCatalogPartialWithRelationsSchema: z.ZodType<TestCatalogPartialWithRelations> = TestCatalogPartialSchema.merge(z.object({
  versions: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).array(),
  defaultVersion: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  configurations: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).array(),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  labOrderTests: z.lazy(() => LabOrderTestPartialWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestPartialWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestPartialWithRelationsSchema).array(),
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => TestCatalogAuditLogPartialWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
  testGenes: z.lazy(() => TestGenePartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogWithPartialRelations = z.infer<typeof TestCatalogSchema> & TestCatalogPartialRelations

export const TestCatalogWithPartialRelationsSchema: z.ZodType<TestCatalogWithPartialRelations> = TestCatalogSchema.merge(z.object({
  versions: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).array(),
  defaultVersion: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema).nullable(),
  configurations: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema).array(),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  labOrderTests: z.lazy(() => LabOrderTestPartialWithRelationsSchema).array(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestPartialWithRelationsSchema).array(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestPartialWithRelationsSchema).array(),
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
  auditLogs: z.lazy(() => TestCatalogAuditLogPartialWithRelationsSchema).array(),
  consentAuditLogs: z.lazy(() => ConsentAuditLogPartialWithRelationsSchema).array(),
  testGenes: z.lazy(() => TestGenePartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogSchema;
