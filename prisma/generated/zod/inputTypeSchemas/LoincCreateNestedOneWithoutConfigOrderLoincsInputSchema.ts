import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutConfigOrderLoincsInputSchema } from './LoincCreateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema';
import { LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema } from './LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';

export const LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema: z.ZodType<Prisma.LoincCreateNestedOneWithoutConfigOrderLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
});

export default LoincCreateNestedOneWithoutConfigOrderLoincsInputSchema;
