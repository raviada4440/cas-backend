import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestWhereInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestWhereInputSchema'

export const TestConfigSpecimenManifestDeleteManyArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestDeleteManyArgs> = z.object({
  where: TestConfigSpecimenManifestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigSpecimenManifestDeleteManyArgsSchema;
