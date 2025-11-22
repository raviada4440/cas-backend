import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutConfigResultLoincsInputSchema } from './LoincCreateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigResultLoincsInputSchema';
import { LoincCreateOrConnectWithoutConfigResultLoincsInputSchema } from './LoincCreateOrConnectWithoutConfigResultLoincsInputSchema';
import { LoincUpsertWithoutConfigResultLoincsInputSchema } from './LoincUpsertWithoutConfigResultLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincUpdateToOneWithWhereWithoutConfigResultLoincsInputSchema } from './LoincUpdateToOneWithWhereWithoutConfigResultLoincsInputSchema';
import { LoincUpdateWithoutConfigResultLoincsInputSchema } from './LoincUpdateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema';

export const LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInputSchema: z.ZodType<Prisma.LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutConfigResultLoincsInputSchema).optional(),
  upsert: z.lazy(() => LoincUpsertWithoutConfigResultLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LoincUpdateToOneWithWhereWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUpdateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema) ]).optional(),
});

export default LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInputSchema;
