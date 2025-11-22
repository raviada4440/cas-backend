import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInput> = z.strictObject({
  versionId: z.string(),
  consentTemplateId: z.string(),
});

export default TestCatalogVersionConsentVersionIdConsentTemplateIdCompoundUniqueInputSchema;
