import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { TestCatalogVersionSpecimenArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenArgsSchema"

export const TestConfigSpecimenManifestIncludeSchema: z.ZodType<Prisma.TestConfigSpecimenManifestInclude> = z.object({
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  versionSpecimen: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenArgsSchema)]).optional(),
}).strict();

export default TestConfigSpecimenManifestIncludeSchema;
