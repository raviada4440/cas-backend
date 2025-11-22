import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestSelectSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestSelectSchema';
import { TestConfigSpecimenManifestIncludeSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestIncludeSchema';

export const TestConfigSpecimenManifestArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestDefaultArgs> = z.object({
  select: z.lazy(() => TestConfigSpecimenManifestSelectSchema).optional(),
  include: z.lazy(() => TestConfigSpecimenManifestIncludeSchema).optional(),
}).strict();

export default TestConfigSpecimenManifestArgsSchema;
