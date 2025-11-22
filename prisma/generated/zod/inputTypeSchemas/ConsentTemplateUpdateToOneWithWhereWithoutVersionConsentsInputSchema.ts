import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { ConsentTemplateUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUpdateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema';

export const ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema) ]),
});

export default ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInputSchema;
