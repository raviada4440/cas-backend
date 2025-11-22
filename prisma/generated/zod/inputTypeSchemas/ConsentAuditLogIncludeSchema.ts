import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConsentTemplateArgsSchema } from "../outputTypeSchemas/ConsentTemplateArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogVersionConsentArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentArgsSchema"

export const ConsentAuditLogIncludeSchema: z.ZodType<Prisma.ConsentAuditLogInclude> = z.object({
  consentTemplate: z.union([z.boolean(),z.lazy(() => ConsentTemplateArgsSchema)]).optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  versionConsent: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentArgsSchema)]).optional(),
}).strict();

export default ConsentAuditLogIncludeSchema;
