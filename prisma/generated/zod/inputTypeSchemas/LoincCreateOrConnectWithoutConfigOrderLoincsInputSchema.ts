import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincCreateWithoutConfigOrderLoincsInputSchema } from './LoincCreateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema';

export const LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema: z.ZodType<Prisma.LoincCreateOrConnectWithoutConfigOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema) ]),
});

export default LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema;
