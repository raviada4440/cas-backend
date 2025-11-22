import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutTestOrderLoincsInputSchema } from './LoincCreateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutTestOrderLoincsInputSchema';
import { LoincCreateOrConnectWithoutTestOrderLoincsInputSchema } from './LoincCreateOrConnectWithoutTestOrderLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';

export const LoincCreateNestedOneWithoutTestOrderLoincsInputSchema: z.ZodType<Prisma.LoincCreateNestedOneWithoutTestOrderLoincsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutTestOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
});

export default LoincCreateNestedOneWithoutTestOrderLoincsInputSchema;
