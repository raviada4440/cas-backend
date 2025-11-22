import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema } from './TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';

export const TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema).array(), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigBiomarkerCreateManyBiomarkerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigBiomarkerCreateNestedManyWithoutBiomarkerInputSchema;
