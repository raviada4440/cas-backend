import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenFindManyArgsSchema"
import { TestCatalogVersionBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionBiomarkerFindManyArgsSchema"
import { TestCatalogVersionCptCodeFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionCptCodeFindManyArgsSchema"
import { TestCatalogVersionOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderLoincFindManyArgsSchema"
import { TestCatalogVersionResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionResultLoincFindManyArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { ConsentAuditLogFindManyArgsSchema } from "../outputTypeSchemas/ConsentAuditLogFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogApprovalFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogApprovalFindManyArgsSchema"
import { TestCatalogFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogFindManyArgsSchema"
import { TestCatalogConfigurationFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationFindManyArgsSchema"
import { ReviewThreadFindManyArgsSchema } from "../outputTypeSchemas/ReviewThreadFindManyArgsSchema"
import { TestCatalogVersionCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionCountOutputTypeArgsSchema"

export const TestCatalogVersionIncludeSchema: z.ZodType<Prisma.TestCatalogVersionInclude> = z.object({
  specimens: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenFindManyArgsSchema)]).optional(),
  biomarkers: z.union([z.boolean(),z.lazy(() => TestCatalogVersionBiomarkerFindManyArgsSchema)]).optional(),
  cptCodes: z.union([z.boolean(),z.lazy(() => TestCatalogVersionCptCodeFindManyArgsSchema)]).optional(),
  orderLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderLoincFindManyArgsSchema)]).optional(),
  resultLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionResultLoincFindManyArgsSchema)]).optional(),
  orderForms: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  consents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  consentAuditLogs: z.union([z.boolean(),z.lazy(() => ConsentAuditLogFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  approvals: z.union([z.boolean(),z.lazy(() => TestCatalogApprovalFindManyArgsSchema)]).optional(),
  defaultForTests: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  configurations: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationFindManyArgsSchema)]).optional(),
  reviewThreads: z.union([z.boolean(),z.lazy(() => ReviewThreadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default TestCatalogVersionIncludeSchema;
