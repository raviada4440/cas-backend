export const USER_IMMUTABLE_KEYS = ['id', 'createdAt', 'updatedAt', 'emailVerified'] as const

export const UserSchemaSerializeProjection = {
  keys: ['password'] as string[],
}
