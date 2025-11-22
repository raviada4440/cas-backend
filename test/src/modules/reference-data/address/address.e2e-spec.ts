import { AddressModule } from '@core/modules/reference-data/address/address.module'
import { createE2EApp } from '@test/helper/create-e2e-app'

describe('ROUTE /address', () => {
  const proxy = createE2EApp({
    imports: [AddressModule],
  })

  it('POST /address/autocomplete should return empty suggestions', async () => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/address/autocomplete',
      body: {
        input: '123 Main',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toEqual({ suggestions: [] })
  })

  it('POST /address/place should return placeholder details', async () => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/address/place',
      body: {
        placeId: 'PLACE_ID',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      address: {
        place_id: null,
        street: '',
        city: '',
        state: '',
        country: '',
        postal_code: null,
        postal_code_extension: null,
        formatted_address: '',
      },
    })
  })

  it('POST /address/validate should return default validation response', async () => {
    const response = await proxy.app.inject({
      method: 'POST',
      url: '/address/validate',
      body: {
        street: '123 Main St',
      },
    })

    expect(response.statusCode).toBe(200)
    const body = response.json()
    expect(body).toMatchObject({
      candidates: [],
      message: 'Address validation provider not configured',
    })
  })
})
