import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogIncludeSchema } from '../inputTypeSchemas/TestCatalogIncludeSchema'
import { TestCatalogWhereInputSchema } from '../inputTypeSchemas/TestCatalogWhereInputSchema'
import { TestCatalogOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogOrderByWithRelationInputSchema'
import { TestCatalogWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogWhereUniqueInputSchema'
import { TestCatalogScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogScalarFieldEnumSchema'
import { TestCatalogVersionFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionFindManyArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationFindManyArgsSchema"
import { LabArgsSchema } from "../outputTypeSchemas/LabArgsSchema"
import { LabOrderTestFindManyArgsSchema } from "../outputTypeSchemas/LabOrderTestFindManyArgsSchema"
import { OrganizationFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/OrganizationFavoriteTestFindManyArgsSchema"
import { ProviderFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/ProviderFavoriteTestFindManyArgsSchema"
import { SponsoredTestFindManyArgsSchema } from "../outputTypeSchemas/SponsoredTestFindManyArgsSchema"
import { TestCatalogAuditLogFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogAuditLogFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { TestGeneFindManyArgsSchema } from "../outputTypeSchemas/TestGeneFindManyArgsSchema"
import { TestCatalogCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogSelectSchema: z.ZodType<Prisma.TestCatalogSelect> = z.object({
  id: z.boolean().optional(),
  labId: z.boolean().optional(),
  casandraTestId: z.boolean().optional(),
  labTestId: z.boolean().optional(),
  testName: z.boolean().optional(),
  specialNotes: z.boolean().optional(),
  testCategory: z.boolean().optional(),
  testSubCategory: z.boolean().optional(),
  status: z.boolean().optional(),
  defaultVersionId: z.boolean().optional(),
  currentVersion: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  versions: z.union([z.boolean(),z.lazy(() => TestCatalogVersionFindManyArgsSchema)]).optional(),
  defaultVersion: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  configurations: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationFindManyArgsSchema)]).optional(),
  lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  labOrderTests: z.union([z.boolean(),z.lazy(() => LabOrderTestFindManyArgsSchema)]).optional(),
  organizationFavoriteTests: z.union([z.boolean(),z.lazy(() => OrganizationFavoriteTestFindManyArgsSchema)]).optional(),
  providerFavoriteTests: z.union([z.boolean(),z.lazy(() => ProviderFavoriteTestFindManyArgsSchema)]).optional(),
  sponsoredTests: z.union([z.boolean(),z.lazy(() => SponsoredTestFindManyArgsSchema)]).optional(),
  auditLogs: z.union([z.boolean(),z.lazy(() => TestCatalogAuditLogFindManyArgsSchema)]).optional(),
  consentAuditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  testGenes: z.union([z.boolean(),z.lazy(() => TestGeneFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogFindManyArgsSchema: z.ZodType<Prisma.TestCatalogFindManyArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: z.lazy(() => TestCatalogIncludeSchema).optional(),
  where: TestCatalogWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogOrderByWithRelationInputSchema.array(), TestCatalogOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogScalarFieldEnumSchema, TestCatalogScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogFindManyArgsSchema;
