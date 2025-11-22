import { UserRegisterInput } from '@core/modules/user/dtos/register.dto'
import { snowflake } from '@core/processors/database/snowflake.util'

export const generateMockUser = (): UserRegisterInput => {
  return {
    email: `mockuser_${snowflake.nextId()}@example.com`,
    name: `Mock User ${snowflake.nextId()}`,
    image: 'https://example.com/avatar.jpg',
    password: 'mockPassword123',
  }
}

const mockUserInputData1 = generateMockUser()

export { mockUserInputData1 }
