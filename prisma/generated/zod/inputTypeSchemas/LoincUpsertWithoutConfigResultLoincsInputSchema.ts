import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincUpdateWithoutConfigResultLoincsInputSchema } from './LoincUpdateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema';
import { LoincCreateWithoutConfigResultLoincsInputSchema } from './LoincCreateWithoutConfigResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutConfigResultLoincsInputSchema } from './LoincUncheckedCreateWithoutConfigResultLoincsInputSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const LoincUpsertWithoutConfigResultLoincsInputSchema: z.ZodType<Prisma.LoincUpsertWithoutConfigResultLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LoincUpdateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutConfigResultLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => LoincCreateWithoutConfigResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutConfigResultLoincsInputSchema) ]),
  where: z.lazy(() => LoincWhereInputSchema).optional(),
});

export default LoincUpsertWithoutConfigResultLoincsInputSchema;
