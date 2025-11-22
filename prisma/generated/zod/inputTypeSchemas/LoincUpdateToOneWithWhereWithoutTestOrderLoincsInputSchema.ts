import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';
import { LoincUpdateWithoutTestOrderLoincsInputSchema } from './LoincUpdateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema';

export const LoincUpdateToOneWithWhereWithoutTestOrderLoincsInputSchema: z.ZodType<Prisma.LoincUpdateToOneWithWhereWithoutTestOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LoincUpdateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema) ]),
});

export default LoincUpdateToOneWithWhereWithoutTestOrderLoincsInputSchema;
