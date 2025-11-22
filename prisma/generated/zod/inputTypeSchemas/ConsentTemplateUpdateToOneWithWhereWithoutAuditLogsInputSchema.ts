import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { ConsentTemplateUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUpdateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema';

export const ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema) ]),
});

export default ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInputSchema;
