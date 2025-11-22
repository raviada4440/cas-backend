import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigSpecimenManifestUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestUpdateManyMutationInputSchema'
import { TestConfigSpecimenManifestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestUncheckedUpdateManyInputSchema'
import { TestConfigSpecimenManifestWhereInputSchema } from '../inputTypeSchemas/TestConfigSpecimenManifestWhereInputSchema'

export const TestConfigSpecimenManifestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigSpecimenManifestUpdateManyMutationInputSchema, TestConfigSpecimenManifestUncheckedUpdateManyInputSchema ]),
  where: TestConfigSpecimenManifestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigSpecimenManifestUpdateManyAndReturnArgsSchema;
