import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';
import { LoincUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUpdateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema';

export const LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInputSchema: z.ZodType<Prisma.LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LoincUpdateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema) ]),
});

export default LoincUpdateToOneWithWhereWithoutConfigOrderLoincsInputSchema;
