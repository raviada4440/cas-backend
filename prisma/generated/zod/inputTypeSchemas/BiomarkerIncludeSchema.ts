import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionBiomarkerFindManyArgsSchema"
import { TestConfigBiomarkerFindManyArgsSchema } from "../outputTypeSchemas/TestConfigBiomarkerFindManyArgsSchema"
import { BiomarkerCountOutputTypeArgsSchema } from "../outputTypeSchemas/BiomarkerCountOutputTypeArgsSchema"

export const BiomarkerIncludeSchema: z.ZodType<Prisma.BiomarkerInclude> = z.object({
  testBiomarkers: z.union([z.boolean(),z.lazy(() => TestCatalogVersionBiomarkerFindManyArgsSchema)]).optional(),
  configOverrides: z.union([z.boolean(),z.lazy(() => TestConfigBiomarkerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BiomarkerCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default BiomarkerIncludeSchema;
