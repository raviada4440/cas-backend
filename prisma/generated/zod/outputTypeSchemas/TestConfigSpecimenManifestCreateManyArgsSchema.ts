import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestCreateManyInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestCreateManyInputSchema'

export const TestConfigSpecimenManifestCreateManyArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateManyArgs> = z.object({
  data: z.union([ TestConfigSpecimenManifestCreateManyInputSchema, TestConfigSpecimenManifestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigSpecimenManifestCreateManyArgsSchema;
