import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogCreateWithoutTestInputSchema } from './TestCatalogAuditLogCreateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema';
import { TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema } from './TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema';
import { TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema } from './TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogAuditLogCreateManyTestInputEnvelopeSchema } from './TestCatalogAuditLogCreateManyTestInputEnvelopeSchema';
import { TestCatalogAuditLogWhereUniqueInputSchema } from './TestCatalogAuditLogWhereUniqueInputSchema';
import { TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema } from './TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema } from './TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema';
import { TestCatalogAuditLogScalarWhereInputSchema } from './TestCatalogAuditLogScalarWhereInputSchema';

export const TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema: z.ZodType<Prisma.TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUpsertWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogAuditLogCreateManyTestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema), z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema), z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema), z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema), z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUpdateWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogAuditLogScalarWhereInputSchema), z.lazy(() => TestCatalogAuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogAuditLogUncheckedUpdateManyWithoutTestNestedInputSchema;
