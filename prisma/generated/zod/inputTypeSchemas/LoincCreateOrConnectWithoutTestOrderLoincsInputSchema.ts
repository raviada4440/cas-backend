import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincCreateWithoutTestOrderLoincsInputSchema } from './LoincCreateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutTestOrderLoincsInputSchema';

export const LoincCreateOrConnectWithoutTestOrderLoincsInputSchema: z.ZodType<Prisma.LoincCreateOrConnectWithoutTestOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => LoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LoincCreateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestOrderLoincsInputSchema) ]),
});

export default LoincCreateOrConnectWithoutTestOrderLoincsInputSchema;
