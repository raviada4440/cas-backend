import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';

export const ConsentTemplateCreateNestedOneWithoutVersionConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateNestedOneWithoutVersionConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
});

export default ConsentTemplateCreateNestedOneWithoutVersionConsentsInputSchema;
