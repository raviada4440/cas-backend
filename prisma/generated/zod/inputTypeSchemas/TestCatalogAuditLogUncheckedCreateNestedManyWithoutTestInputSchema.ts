import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogCreateWithoutTestInputSchema } from './TestCatalogAuditLogCreateWithoutTestInputSchema';
import { TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema';
import { TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema } from './TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema';
import { TestCatalogAuditLogCreateManyTestInputEnvelopeSchema } from './TestCatalogAuditLogCreateManyTestInputEnvelopeSchema';
import { TestCatalogAuditLogWhereUniqueInputSchema } from './TestCatalogAuditLogWhereUniqueInputSchema';

export const TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogAuditLogCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogAuditLogCreateManyTestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema), z.lazy(() => TestCatalogAuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogAuditLogUncheckedCreateNestedManyWithoutTestInputSchema;
