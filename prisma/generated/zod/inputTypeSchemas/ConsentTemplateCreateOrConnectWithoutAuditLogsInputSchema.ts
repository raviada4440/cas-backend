import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateCreateWithoutAuditLogsInputSchema } from './ConsentTemplateCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema';

export const ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateOrConnectWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => ConsentTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema) ]),
});

export default ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema;
