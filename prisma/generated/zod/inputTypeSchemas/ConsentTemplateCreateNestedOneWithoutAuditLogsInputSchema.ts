import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutAuditLogsInputSchema } from './ConsentTemplateCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema } from './ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';

export const ConsentTemplateCreateNestedOneWithoutAuditLogsInputSchema: z.ZodType<Prisma.ConsentTemplateCreateNestedOneWithoutAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
});

export default ConsentTemplateCreateNestedOneWithoutAuditLogsInputSchema;
