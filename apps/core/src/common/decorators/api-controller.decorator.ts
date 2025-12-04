import { API_VERSION } from '@core/app.config'
import { Controller, ControllerOptions } from '@nestjs/common'

export const apiRoutePrefix = `/api/v${API_VERSION}`

type ControllerFactory = typeof Controller
type ControllerDecorator = ReturnType<ControllerFactory>

export const ApiController = (
  optionOrString?: string | string[] | ControllerOptions,
): ControllerDecorator => {
  if (typeof optionOrString === 'undefined') {
    return Controller(apiRoutePrefix)
  }

  const transformPath = (path: string) => `${apiRoutePrefix}/${path.replace(/^\/*/, '')}`

  if (typeof optionOrString === 'string') {
    return Controller(transformPath(optionOrString))
  }

  if (Array.isArray(optionOrString)) {
    return Controller(optionOrString.map((path) => transformPath(path)))
  }

  const path = optionOrString.path || ''
  const transformedPath = Array.isArray(path)
    ? path.map((i) => transformPath(i))
    : transformPath(path)

  return Controller({
    ...optionOrString,
    path: transformedPath,
  })
}
