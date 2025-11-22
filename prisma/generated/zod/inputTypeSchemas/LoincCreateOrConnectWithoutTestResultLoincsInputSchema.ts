import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincCreateWithoutTestResultLoincsInputSchema } from './LoincCreateWithoutTestResultLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestResultLoincsInputSchema } from './LoincUncheckedCreateWithoutTestResultLoincsInputSchema';

export const LoincCreateOrConnectWithoutTestResultLoincsInputSchema: z.ZodType<Prisma.LoincCreateOrConnectWithoutTestResultLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LoincCreateWithoutTestResultLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestResultLoincsInputSchema) ]),
});

export default LoincCreateOrConnectWithoutTestResultLoincsInputSchema;
