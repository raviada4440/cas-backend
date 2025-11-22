import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUpdateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema';
import { ConsentTemplateCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const ConsentTemplateUpsertWithoutVersionConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateUpsertWithoutVersionConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema) ]),
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
});

export default ConsentTemplateUpsertWithoutVersionConsentsInputSchema;
