import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';
import { LoincUpdateWithoutConfigResultLoincsInputSchema } from './LoincUpdateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema';

export const LoincUpdateToOneWithWhereWithoutConfigResultLoincsInputSchema: z.ZodType<Prisma.LoincUpdateToOneWithWhereWithoutConfigResultLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LoincUpdateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema) ]),
});

export default LoincUpdateToOneWithWhereWithoutConfigResultLoincsInputSchema;
