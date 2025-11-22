import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigBiomarkerCreateOrConnectWithoutConfigurationInputSchema;
