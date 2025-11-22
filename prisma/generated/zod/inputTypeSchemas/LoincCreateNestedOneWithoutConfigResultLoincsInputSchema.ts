import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutConfigResultLoincsInputSchema } from './LoincCreateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigResultLoincsInputSchema';
import { LoincCreateOrConnectWithoutConfigResultLoincsInputSchema } from './LoincCreateOrConnectWithoutConfigResultLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';

export const LoincCreateNestedOneWithoutConfigResultLoincsInputSchema: z.ZodType<Prisma.LoincCreateNestedOneWithoutConfigResultLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutConfigResultLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
});

export default LoincCreateNestedOneWithoutConfigResultLoincsInputSchema;
