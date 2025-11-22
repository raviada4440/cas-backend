import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUpdateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema';
import { ConsentTemplateCreateWithoutAuditLogsInputSchema } from './ConsentTemplateCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';

export const ConsentTemplateUpsertWithoutAuditLogsInputSchema: z.ZodType<Prisma.ConsentTemplateUpsertWithoutAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ConsentTemplateUpdateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema) ]),
  where: z.lazy(() => ConsentTemplateWhereInputSchema).optional(),
});

export default ConsentTemplateUpsertWithoutAuditLogsInputSchema;
