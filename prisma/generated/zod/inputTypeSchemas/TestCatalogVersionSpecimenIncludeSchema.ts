import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestConfigSpecimenManifestFindManyArgsSchema } from "../outputTypeSchemas/TestConfigSpecimenManifestFindManyArgsSchema"
import { TestCatalogVersionSpecimenCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenCountOutputTypeArgsSchema"

export const TestCatalogVersionSpecimenIncludeSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenInclude> = z.object({
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  variantManifests: z.union([z.boolean(),z.lazy(() => TestConfigSpecimenManifestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default TestCatalogVersionSpecimenIncludeSchema;
