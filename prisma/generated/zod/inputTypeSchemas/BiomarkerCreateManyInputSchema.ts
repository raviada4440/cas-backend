import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BiomarkerCreateManyInputSchema: z.ZodType<Prisma.BiomarkerCreateManyInput> = z.strictObject({
  hgncId: z.string(),
  hgncStatus: z.string().optional().nullable(),
  hgncApprovedSymbol: z.string().optional().nullable(),
  hgncApprovedName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default BiomarkerCreateManyInputSchema;
