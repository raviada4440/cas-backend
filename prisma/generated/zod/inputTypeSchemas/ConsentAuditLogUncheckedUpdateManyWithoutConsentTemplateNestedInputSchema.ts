import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema } from './ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema';
import { ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema } from './ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema } from './ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema } from './ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';

export const ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema;
