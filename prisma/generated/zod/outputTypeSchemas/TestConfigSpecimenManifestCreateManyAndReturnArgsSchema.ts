import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestCreateManyInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestCreateManyInputSchema'

export const TestConfigSpecimenManifestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigSpecimenManifestCreateManyInputSchema, TestConfigSpecimenManifestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigSpecimenManifestCreateManyAndReturnArgsSchema;
