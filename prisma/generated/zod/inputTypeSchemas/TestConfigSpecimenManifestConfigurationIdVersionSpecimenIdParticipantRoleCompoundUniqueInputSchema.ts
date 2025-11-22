import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';

export const TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInput> = z.strictObject({
  configurationId: z.string(),
  versionSpecimenId: z.string(),
  participantRole: z.lazy(() => ParticipantRoleSchema),
});

export default TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema;
