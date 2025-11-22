import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema } from './TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';

export const TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigBiomarkerCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema), z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigBiomarkerUncheckedCreateNestedManyWithoutConfigurationInputSchema;
