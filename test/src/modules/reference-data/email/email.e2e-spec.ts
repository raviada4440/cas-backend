import { EmailModule } from '@core/modules/reference-data/email/email.module'
import { createE2EApp } from '@test/helper/create-e2e-app'

describe('ROUTE /email', () => {
  const proxy = createE2EApp({
    imports: [EmailModule],
  })

  it('POST /email/validate should return default validation result', async () => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/email/validate',
      body: {
        email: 'user@example.com',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      result: {
        email: '',
        normalized: null,
        result: 'unknown',
        message: 'Email validation provider not configured',
      },
    })
  })
})
