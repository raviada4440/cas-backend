import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincUpdateWithoutTestResultLoincsInputSchema } from './LoincUpdateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestResultLoincsInputSchema';
import { LoincCreateWithoutTestResultLoincsInputSchema } from './LoincCreateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestResultLoincsInputSchema } from './LoincUncheckedCreateWithoutTestResultLoincsInputSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const LoincUpsertWithoutTestResultLoincsInputSchema: z.ZodType<Prisma.LoincUpsertWithoutTestResultLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LoincUpdateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestResultLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => LoincCreateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestResultLoincsInputSchema) ]),
  where: z.lazy(() => LoincWhereInputSchema).optional(),
});

export default LoincUpsertWithoutTestResultLoincsInputSchema;
