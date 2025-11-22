import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentIncludeSchema } from '../inputTypeSchemas/LabOrderConsentIncludeSchema'
import { LabOrderConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereUniqueInputSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { TestCatalogVersionConsentArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentArgsSchema"
import { ConsentTemplateArgsSchema } from "../outputTypeSchemas/ConsentTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderConsentSelectSchema: z.ZodType<Prisma.LabOrderConsentSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  versionConsentId: z.boolean().optional(),
  consentTemplateId: z.boolean().optional(),
  consentTitle: z.boolean().optional(),
  consentContent: z.boolean().optional(),
  isAccepted: z.boolean().optional(),
  acceptedAt: z.boolean().optional(),
  declinedAt: z.boolean().optional(),
  patientSignature: z.boolean().optional(),
  witnessSignature: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  consentVersion: z.boolean().optional(),
  collectedBy: z.boolean().optional(),
  collectedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  consent: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentArgsSchema)]).optional(),
  consentTemplate: z.union([z.boolean(),z.lazy(() => ConsentTemplateArgsSchema)]).optional(),
}).strict()

export const LabOrderConsentFindUniqueArgsSchema: z.ZodType<Prisma.LabOrderConsentFindUniqueArgs> = z.object({
  select: LabOrderConsentSelectSchema.optional(),
  include: z.lazy(() => LabOrderConsentIncludeSchema).optional(),
  where: LabOrderConsentWhereUniqueInputSchema, 
}).strict();

export default LabOrderConsentFindUniqueArgsSchema;
