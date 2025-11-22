import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUpdateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema';
import { LoincCreateWithoutConfigOrderLoincsInputSchema } from './LoincCreateWithoutConfigOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const LoincUpsertWithoutConfigOrderLoincsInputSchema: z.ZodType<Prisma.LoincUpsertWithoutConfigOrderLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LoincUpdateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigOrderLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigOrderLoincsInputSchema) ]),
  where: z.lazy(() => LoincWhereInputSchema).optional(),
});

export default LoincUpsertWithoutConfigOrderLoincsInputSchema;
