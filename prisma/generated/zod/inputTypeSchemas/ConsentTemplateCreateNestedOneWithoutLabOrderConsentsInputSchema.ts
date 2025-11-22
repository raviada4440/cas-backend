import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';

export const ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
});

export default ConsentTemplateCreateNestedOneWithoutLabOrderConsentsInputSchema;
