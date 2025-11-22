import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { LabOrderConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderConsentFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { ConsentTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/ConsentTemplateCountOutputTypeArgsSchema"

export const ConsentTemplateIncludeSchema: z.ZodType<Prisma.ConsentTemplateInclude> = z.object({
  versionConsents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  labOrderConsents: z.union([z.boolean(),z.lazy(() => LabOrderConsentFindManyArgsSchema)]).optional(),
  auditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConsentTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ConsentTemplateIncludeSchema;
