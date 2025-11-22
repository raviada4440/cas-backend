import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogAuditLogScalarWhereInputSchema } from './TestCatalogAuditLogScalarWhereInputSchema';
import { TestCatalogAuditLogUpdateManyMutationInputSchema } from './TestCatalogAuditLogUpdateManyMutationInputSchema';
import { TestCatalogAuditLogUncheckedUpdateManyWithoutTestInputSchema } from './TestCatalogAuditLogUncheckedUpdateManyWithoutTestInputSchema';

export const TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogAuditLogUpdateManyWithWhereWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogAuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogAuditLogUpdateManyMutationInputSchema), z.lazy(() => TestCatalogAuditLogUncheckedUpdateManyWithoutTestInputSchema) ]),
});

export default TestCatalogAuditLogUpdateManyWithWhereWithoutTestInputSchema;
