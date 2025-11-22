import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateCreateWithoutAuditLogsInputSchema } from './ConsentTemplateCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema';
import { ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema } from './ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema';
import { ConsentTemplateUpsertWithoutAuditLogsInputSchema } from './ConsentTemplateUpsertWithoutAuditLogsInputSchema';
import { ConsentTemplateWhereInputSchema } from './ConsentTemplateWhereInputSchema';
import { ConsentTemplateWhereUniqueInputSchema } from './ConsentTemplateWhereUniqueInputSchema';
import { ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInputSchema } from './ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInputSchema';
import { ConsentTemplateUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUpdateWithoutAuditLogsInputSchema';
import { ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema } from './ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema';

export const ConsentTemplateUpdateOneWithoutAuditLogsNestedInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateOneWithoutAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentTemplateCreateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConsentTemplateCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => ConsentTemplateUpsertWithoutAuditLogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ConsentTemplateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ConsentTemplateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ConsentTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConsentTemplateUpdateToOneWithWhereWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUpdateWithoutAuditLogsInputSchema), z.lazy(() => ConsentTemplateUncheckedUpdateWithoutAuditLogsInputSchema) ]).optional(),
});

export default ConsentTemplateUpdateOneWithoutAuditLogsNestedInputSchema;
