import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateIncludeSchema } from '../inputTypeSchemas/ConsentTemplateIncludeSchema'
import { ConsentTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ConsentTemplateWhereUniqueInputSchema'
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { LabOrderConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderConsentFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { ConsentTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/ConsentTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConsentTemplateSelectSchema: z.ZodType<Prisma.ConsentTemplateSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  consentType: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  legalText: z.boolean().optional(),
  formSchema: z.boolean().optional(),
  status: z.boolean().optional(),
  version: z.boolean().optional(),
  effectiveDate: z.boolean().optional(),
  retiredDate: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  isGlobal: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  versionConsents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  labOrderConsents: z.union([z.boolean(),z.lazy(() => LabOrderConsentFindManyArgsSchema)]).optional(),
  auditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConsentTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ConsentTemplateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ConsentTemplateFindUniqueOrThrowArgs> = z.object({
  select: ConsentTemplateSelectSchema.optional(),
  include: z.lazy(() => ConsentTemplateIncludeSchema).optional(),
  where: ConsentTemplateWhereUniqueInputSchema, 
}).strict();

export default ConsentTemplateFindUniqueOrThrowArgsSchema;
