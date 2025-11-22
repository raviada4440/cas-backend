import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema';

export const ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]),
});

export default ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema;
