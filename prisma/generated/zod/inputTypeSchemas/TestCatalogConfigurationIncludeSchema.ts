import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogVersionConsentFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionConsentFindManyArgsSchema"
import { TestCatalogApprovalFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogApprovalFindManyArgsSchema"
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { TestConfigCptCodeFindManyArgsSchema } from "../outputTypeSchemas/TestConfigCptCodeFindManyArgsSchema"
import { TestConfigOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigOrderLoincFindManyArgsSchema"
import { TestConfigResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigResultLoincFindManyArgsSchema"
import { TestConfigSpecimenManifestFindManyArgsSchema } from "../outputTypeSchemas/TestConfigSpecimenManifestFindManyArgsSchema"
import { TestConfigBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestConfigBiomarkerFindManyArgsSchema"
import { TestCatalogVersionOrderFormFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderFormFindManyArgsSchema"
import { TestCatalogConfigurationCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationCountOutputTypeArgsSchema"

export const TestCatalogConfigurationIncludeSchema: z.ZodType<Prisma.TestCatalogConfigurationInclude> = z.object({
  test: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  consents: z.union([z.boolean(),z.lazy(() => TestCatalogVersionConsentFindManyArgsSchema)]).optional(),
  approvals: z.union([z.boolean(),z.lazy(() => TestCatalogApprovalFindManyArgsSchema)]).optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  cptOverrides: z.union([z.boolean(),z.lazy(() => TestConfigCptCodeFindManyArgsSchema)]).optional(),
  orderLoincOverrides: z.union([z.boolean(),z.lazy(() => TestConfigOrderLoincFindManyArgsSchema)]).optional(),
  resultLoincOverrides: z.union([z.boolean(),z.lazy(() => TestConfigResultLoincFindManyArgsSchema)]).optional(),
  specimenManifestEntries: z.union([z.boolean(),z.lazy(() => TestConfigSpecimenManifestFindManyArgsSchema)]).optional(),
  biomarkerOverrides: z.union([z.boolean(),z.lazy(() => TestConfigBiomarkerFindManyArgsSchema)]).optional(),
  orderForms: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default TestCatalogConfigurationIncludeSchema;
