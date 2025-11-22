import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema } from './ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUpsertWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUpsertWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema';

export const ConsentTemplateUpdateOneRequiredWithoutLabOrderConsentsNestedInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateOneRequiredWithoutLabOrderConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutLabOrderConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutLabOrderConsentsInputSchema).optional(),
  upsert: z.lazy(() => ConsentTemplateUpsertWithoutLabOrderConsentsInputSchema).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConsentTemplateUpdateToOneWithWhereWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutLabOrderConsentsInputSchema) ]).optional(),
});

export default ConsentTemplateUpdateOneRequiredWithoutLabOrderConsentsNestedInputSchema;
