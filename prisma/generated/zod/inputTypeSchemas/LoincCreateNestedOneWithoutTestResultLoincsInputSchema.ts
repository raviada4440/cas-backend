import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutTestResultLoincsInputSchema } from './LoincCreateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestResultLoincsInputSchema } from './LoincUncheckedCreateWithoutTestResultLoincsInputSchema';
import { LoincCreateOrConnectWithoutTestResultLoincsInputSchema } from './LoincCreateOrConnectWithoutTestResultLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';

export const LoincCreateNestedOneWithoutTestResultLoincsInputSchema: z.ZodType<Prisma.LoincCreateNestedOneWithoutTestResultLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutTestResultLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
});

export default LoincCreateNestedOneWithoutTestResultLoincsInputSchema;
