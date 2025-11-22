import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';

export const EnumParticipantRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumParticipantRoleFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ParticipantRoleSchema).optional(),
});

export default EnumParticipantRoleFieldUpdateOperationsInputSchema;
