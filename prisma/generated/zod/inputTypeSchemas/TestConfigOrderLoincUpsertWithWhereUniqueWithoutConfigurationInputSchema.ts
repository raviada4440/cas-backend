import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUpdateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema;
