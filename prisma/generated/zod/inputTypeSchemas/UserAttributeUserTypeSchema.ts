import { z } from 'zod';

export const UserAttributeUserTypeSchema = z.enum(['Admin','Provider','Organization']);

export type UserAttributeUserTypeType = `${z.infer<typeof UserAttributeUserTypeSchema>}`

export default UserAttributeUserTypeSchema;
