import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentAuditLogIncludeSchema } from '../inputTypeSchemas/ConsentAuditLogIncludeSchema'
import { ConsentAuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/ConsentAuditLogWhereUniqueInputSchema'
import { ConsentTemplateArgsSchema } from "../outputTypeSchemas/ConsentTemplateArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogVersionConsentArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConsentAuditLogSelectSchema: z.ZodType<Prisma.ConsentAuditLogSelect> = z.object({
  id: z.boolean().optional(),
  consentTemplateId: z.boolean().optional(),
  testId: z.boolean().optional(),
  versionId: z.boolean().optional(),
  versionConsentId: z.boolean().optional(),
  action: z.boolean().optional(),
  fieldName: z.boolean().optional(),
  oldValue: z.boolean().optional(),
  newValue: z.boolean().optional(),
  changeReason: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  performedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  consentTemplate: z.union([z.boolean(),z.lazy(() => ConsentTemplateArgsSchema)]).optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  versionConsent: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentArgsSchema)]).optional(),
}).strict()

export const ConsentAuditLogFindUniqueArgsSchema: z.ZodType<Prisma.ConsentAuditLogFindUniqueArgs> = z.object({
  select: ConsentAuditLogSelectSchema.optional(),
  include: z.lazy(() => ConsentAuditLogIncludeSchema).optional(),
  where: ConsentAuditLogWhereUniqueInputSchema, 
}).strict();

export default ConsentAuditLogFindUniqueArgsSchema;
