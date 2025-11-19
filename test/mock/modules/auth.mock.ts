import { AuthService } from '@core/modules/auth/auth.service'
import { defineProvider } from '@test/helper/defineProvider'

type ValidateReturn = Awaited<ReturnType<AuthService['validateUsernameAndPassword']>>

export const authProvider = defineProvider({
  useValue: {
    async signToken() {
      return 'mock-token'
    },
    async validateUsernameAndPassword(): Promise<ValidateReturn> {
      return {} as ValidateReturn
    },
    isCustomToken() {
      return false
    },
    async verifyCustomToken() {
      return true
    },
  },
  provide: AuthService,
})
