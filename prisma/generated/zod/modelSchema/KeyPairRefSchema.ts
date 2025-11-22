import { z } from 'zod';

/////////////////////////////////////////
// KEY PAIR REF SCHEMA
/////////////////////////////////////////

export const KeyPairRefSchema = z.object({
  id: z.string(),
  kid: z.string(),
  alg: z.string(),
  provider: z.string(),
  locator: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type KeyPairRef = z.infer<typeof KeyPairRefSchema>

/////////////////////////////////////////
// KEY PAIR REF PARTIAL SCHEMA
/////////////////////////////////////////

export const KeyPairRefPartialSchema = KeyPairRefSchema.partial()

export type KeyPairRefPartial = z.infer<typeof KeyPairRefPartialSchema>

export default KeyPairRefSchema;
