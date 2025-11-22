import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincCreateWithoutConfigResultLoincsInputSchema } from './LoincCreateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigResultLoincsInputSchema';

export const LoincCreateOrConnectWithoutConfigResultLoincsInputSchema: z.ZodType<Prisma.LoincCreateOrConnectWithoutConfigResultLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigResultLoincsInputSchema) ]),
});

export default LoincCreateOrConnectWithoutConfigResultLoincsInputSchema;
