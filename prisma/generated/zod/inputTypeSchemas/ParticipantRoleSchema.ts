import { z } from 'zod';

export const ParticipantRoleSchema = z.enum(['PROBAND','MOTHER','FATHER','TUMOR','NORMAL']);

export type ParticipantRoleType = `${z.infer<typeof ParticipantRoleSchema>}`

export default ParticipantRoleSchema;
