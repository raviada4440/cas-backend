import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincUpdateWithoutTestOrderLoincsInputSchema } from './LoincUpdateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema';
import { LoincCreateWithoutTestOrderLoincsInputSchema } from './LoincCreateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutTestOrderLoincsInputSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const LoincUpsertWithoutTestOrderLoincsInputSchema: z.ZodType<Prisma.LoincUpsertWithoutTestOrderLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LoincUpdateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => LoincCreateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestOrderLoincsInputSchema) ]),
  where: z.lazy(() => LoincWhereInputSchema).optional(),
});

export default LoincUpsertWithoutTestOrderLoincsInputSchema;
