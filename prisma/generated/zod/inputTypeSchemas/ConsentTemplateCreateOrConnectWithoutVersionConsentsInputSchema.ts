import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema';

export const ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateOrConnectWithoutVersionConsentsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema) ]),
});

export default ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema;
