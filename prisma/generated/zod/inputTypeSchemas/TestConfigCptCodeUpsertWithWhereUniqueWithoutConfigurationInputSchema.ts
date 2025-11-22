import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeWhereUniqueInputSchema } from './TestConfigCptCodeWhereUniqueInputSchema';
import { TestConfigCptCodeUpdateWithoutConfigurationInputSchema } from './TestConfigCptCodeUpdateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigCptCodeUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema;
