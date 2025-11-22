import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutTestResultLoincsInputSchema } from './LoincCreateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestResultLoincsInputSchema } from './LoincUncheckedCreateWithoutTestResultLoincsInputSchema';
import { LoincCreateOrConnectWithoutTestResultLoincsInputSchema } from './LoincCreateOrConnectWithoutTestResultLoincsInputSchema';
import { LoincUpsertWithoutTestResultLoincsInputSchema } from './LoincUpsertWithoutTestResultLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincUpdateToOneWithWhereWithoutTestResultLoincsInputSchema } from './LoincUpdateToOneWithWhereWithoutTestResultLoincsInputSchema';
import { LoincUpdateWithoutTestResultLoincsInputSchema } from './LoincUpdateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestResultLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestResultLoincsInputSchema';

export const LoincUpdateOneRequiredWithoutTestResultLoincsNestedInputSchema: z.ZodType<Prisma.LoincUpdateOneRequiredWithoutTestResultLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutTestResultLoincsInputSchema).optional(),
  upsert: z.lazy(() => LoincUpsertWithoutTestResultLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LoincUpdateToOneWithWhereWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUpdateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestResultLoincsInputSchema) ]).optional(),
});

export default LoincUpdateOneRequiredWithoutTestResultLoincsNestedInputSchema;
