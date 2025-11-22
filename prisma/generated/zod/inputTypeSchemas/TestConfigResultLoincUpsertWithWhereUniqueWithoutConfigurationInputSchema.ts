import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithoutConfigurationInputSchema } from './TestConfigResultLoincUpdateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema;
