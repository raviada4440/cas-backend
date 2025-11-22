import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema';
import { ConsentTemplateUpsertWithoutVersionConsentsInputSchema } from './ConsentTemplateUpsertWithoutVersionConsentsInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInputSchema } from './ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInputSchema';
import { ConsentTemplateUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUpdateWithoutVersionConsentsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema';

export const ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutVersionConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutVersionConsentsInputSchema).optional(),
  upsert: z.lazy(() => ConsentTemplateUpsertWithoutVersionConsentsInputSchema).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConsentTemplateUpdateToOneWithWhereWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUpdateWithoutVersionConsentsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutVersionConsentsInputSchema) ]).optional(),
});

export default ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInputSchema;
