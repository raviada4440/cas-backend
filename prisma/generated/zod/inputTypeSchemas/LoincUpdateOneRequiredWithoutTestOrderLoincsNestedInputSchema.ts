import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateWithoutTestOrderLoincsInputSchema } from './LoincCreateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedCreateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedCreateWithoutTestOrderLoincsInputSchema';
import { LoincCreateOrConnectWithoutTestOrderLoincsInputSchema } from './LoincCreateOrConnectWithoutTestOrderLoincsInputSchema';
import { LoincUpsertWithoutTestOrderLoincsInputSchema } from './LoincUpsertWithoutTestOrderLoincsInputSchema';
import { LoincWhereUniqueInputSchema } from './LoincWhereUniqueInputSchema';
import { LoincUpdateToOneWithWhereWithoutTestOrderLoincsInputSchema } from './LoincUpdateToOneWithWhereWithoutTestOrderLoincsInputSchema';
import { LoincUpdateWithoutTestOrderLoincsInputSchema } from './LoincUpdateWithoutTestOrderLoincsInputSchema';
import { LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema } from './LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema';

export const LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema: z.ZodType<Prisma.LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LoincCreateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedCreateWithoutTestOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LoincCreateOrConnectWithoutTestOrderLoincsInputSchema).optional(),
  upsert: z.lazy(() => LoincUpsertWithoutTestOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => LoincWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LoincUpdateToOneWithWhereWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUpdateWithoutTestOrderLoincsInputSchema), z.lazy(() => LoincUncheckedUpdateWithoutTestOrderLoincsInputSchema) ]).optional(),
});

export default LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema;
