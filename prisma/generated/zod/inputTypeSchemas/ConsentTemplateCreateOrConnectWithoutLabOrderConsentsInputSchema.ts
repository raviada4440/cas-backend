import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema';

export const ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema) ]),
});

export default ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema;
