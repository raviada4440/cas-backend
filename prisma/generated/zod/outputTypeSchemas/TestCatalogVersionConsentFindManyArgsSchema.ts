import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionConsentIncludeSchema'
import { TestCatalogVersionConsentWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereInputSchema'
import { TestCatalogVersionConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentOrderByWithRelationInputSchema'
import { TestCatalogVersionConsentWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereUniqueInputSchema'
import { TestCatalogVersionConsentScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionConsentScalarFieldEnumSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { ConsentTemplateArgsSchema } from "../outputTypeSchemas/ConsentTemplateArgsSchema"
import { LabOrderConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderConsentFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { TestCatalogVersionConsentCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionConsentSelectSchema: z.ZodType<Prisma.TestCatalogVersionConsentSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  consentTemplateId: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  customTitle: z.boolean().optional(),
  customContent: z.boolean().optional(),
  conditionalLogic: z.boolean().optional(),
  dependsOnConsent: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  consentTemplate: z.union([z.boolean(),z.lazy(() => ConsentTemplateArgsSchema)]).optional(),
  labOrderConsents: z.union([z.boolean(),z.lazy(() => LabOrderConsentFindManyArgsSchema)]).optional(),
  auditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionConsentFindManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentFindManyArgs> = z.object({
  select: TestCatalogVersionConsentSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionConsentIncludeSchema).optional(),
  where: TestCatalogVersionConsentWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionConsentOrderByWithRelationInputSchema.array(), TestCatalogVersionConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionConsentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogVersionConsentScalarFieldEnumSchema, TestCatalogVersionConsentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogVersionConsentFindManyArgsSchema;
