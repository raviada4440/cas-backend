import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutConfigOrderLoincsInputSchema } from './LoincCreateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema';
import { LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema } from './LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema';
import { LoincUpsertWithoutConfigOrderLoincsInputSchema } from './LoincUpsertWithoutConfigOrderLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInputSchema } from './LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInputSchema';
import { LoincUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUpdateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema';

export const LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema: z.ZodType<Prisma.LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutConfigOrderLoincsInputSchema).optional(),
  upsert: z.lazy(() => LoincUpsertWithoutConfigOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUpdateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema) ]).optional(),
});

export default LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema;
