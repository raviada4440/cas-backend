import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const ConsentTemplateUpsertWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateUpsertWithoutLabOrderConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema) ]),
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
});

export default ConsentTemplateUpsertWithoutLabOrderConsentsInputSchema;
