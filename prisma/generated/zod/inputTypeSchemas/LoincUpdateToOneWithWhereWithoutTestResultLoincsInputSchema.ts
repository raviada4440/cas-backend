import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';
import { LoincUpdateWithoutTestResultLoincsInputSchema } from './LoincUpdateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestResultLoincsInputSchema';

export const LoincUpdateToOneWithWhereWithoutTestResultLoincsInputSchema: z.ZodType<Prisma.LoincUpdateToOneWithWhereWithoutTestResultLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LoincUpdateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestResultLoincsInputSchema) ]),
});

export default LoincUpdateToOneWithWhereWithoutTestResultLoincsInputSchema;
