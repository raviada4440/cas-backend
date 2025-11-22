import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { TestCatalogVersionConsentArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentArgsSchema"
import { ConsentTemplateArgsSchema } from "../outputTypeSchemas/ConsentTemplateArgsSchema"

export const LabOrderConsentIncludeSchema: z.ZodType<Prisma.LabOrderConsentInclude> = z.object({
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  consent: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentArgsSchema)]).optional(),
  consentTemplate: z.union([z.boolean(),z.lazy(() => ConsentTemplateArgsSchema)]).optional(),
}).strict();

export default LabOrderConsentIncludeSchema;
