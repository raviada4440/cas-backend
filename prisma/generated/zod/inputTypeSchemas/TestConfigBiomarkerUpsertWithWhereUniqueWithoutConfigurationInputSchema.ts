import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUpdateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerCreateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigBiomarkerUpsertWithWhereUniqueWithoutConfigurationInputSchema;
