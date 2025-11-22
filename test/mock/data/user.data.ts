import { randomUUID } from 'node:crypto'

import { UserRegisterInput } from '@core/modules/user/dtos/register.dto'

export const generateMockUser = (): UserRegisterInput => {
  const unique = randomUUID()
  return {
    email: `mockuser_${unique}@example.com`,
    name: `Mock User ${unique}`,
    image: 'https://example.com/avatar.jpg',
    password: 'mockPassword123',
  }
}

const mockUserInputData1 = generateMockUser()

export { mockUserInputData1 }
