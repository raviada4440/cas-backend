import { PhoneModule } from '@core/modules/reference-data/phone/phone.module'
import { createE2EApp } from '@test/helper/create-e2e-app'

describe('ROUTE /phone', () => {
  const proxy = createE2EApp({
    imports: [PhoneModule],
  })

  it('POST /phone/validate should return default validation result', async () => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/phone/validate',
      body: {
        phone: '+1 (555) 123-4567',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      result: {
        normalized: '',
        national_format: null,
        country_code: null,
        status: 'unknown',
        message: 'Phone validation provider not configured',
      },
    })
  })
})
