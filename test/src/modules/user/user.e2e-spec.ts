import { hashSync } from 'bcrypt'
import { omit } from 'lodash'
import snakecaseKeys from 'snakecase-keys'

import { UserModule } from '@core/modules/user/user.module'
import { UserSchemaSerializeProjection } from '@core/modules/user/user.protect'
import { createE2EApp } from '@test/helper/create-e2e-app'
import { prisma } from '@test/lib/prisma'
import { generateMockUser, mockUserInputData1 } from '@test/mock/data/user.data'

describe('ROUTE /user', () => {
  const proxy = createE2EApp({
    imports: [UserModule],
  })

  it('POST /register', async () => {
    const data = await proxy.app.inject({
      method: 'POST',
      url: '/user/register',
      body: mockUserInputData1,
    })

    expect(data.statusCode).toBe(201)
    const res = data.json()
    expect(res.password).toBeUndefined()
    expect(res).toMatchObject(
      snakecaseKeys(omit(mockUserInputData1, UserSchemaSerializeProjection.keys), { deep: true }),
    )
  })

  it('POST /login', async () => {
    const password = 'password'
    const loginUser = generateMockUser()
    const { email } = await prisma.user.create({
      data: {
        ...loginUser,
        password: hashSync(password, 8),
      },
    })

    const data = await proxy.app.inject({
      method: 'POST',
      url: '/user/login',
      body: {
        email,
        password,
      },
    })

    expect(data.statusCode).toBe(200)
  })
})
