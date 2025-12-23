import './global/dotenv.global'

import { AxiosRequestConfig } from 'axios'
import { argv } from 'zx-cjs'

import { parseBooleanishValue } from './constants/parser.utilt'
import { machineIdSync } from './shared/utils/machine.util'

export const API_VERSION = 1

console.log(argv)

const { PORT: ENV_PORT, MX_ENCRYPT_KEY } = process.env

export const PORT = argv.port || ENV_PORT || 3333

const corsAllowedOriginsEnv =
  process.env.CORS_ALLOWED_ORIGINS?.split(',')
    .map((o) => o.trim())
    .filter(Boolean) ?? []

export const CROSS_DOMAIN = {
  allowedOrigins:
    corsAllowedOriginsEnv.length > 0
      ? corsAllowedOriginsEnv
      : [
          `localhost:${PORT}`,
          `127.0.0.1:${PORT}`,
          'localhost:3000',
          '127.0.0.1:3000',
          '^(.+\\.)?casandra\\.ai$',
        ],
  allowedReferer: 'casandra.ai',
}

// If cache is disabled explicitly, short-circuit Redis to avoid noisy connection attempts
const disableCache =
  parseBooleanishValue(String(argv.disable_cache ?? 'false')) ||
  parseBooleanishValue(process.env.DISABLE_CACHE ?? 'false')

const redisUrl = disableCache ? null : process.env.REDIS_URL || null

export const REDIS = {
  url: redisUrl,
  ttl: null,
  httpCacheTTL: 5,
  max: 5,
  disableApiCache: disableCache,
}

export const SECURITY = {
  jwtSecret: argv.jwtSecret || 'asjhczxiucipoiopiqm2376',
  jwtExpire: 7,
}

export const AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
}

export const CLUSTER = {
  enable: argv.cluster ?? false,
  workers: argv.cluster_workers,
}

const ENCRYPT_KEY = argv.encrypt_key || MX_ENCRYPT_KEY

export const ENCRYPT = {
  key: ENCRYPT_KEY || machineIdSync(),
  enable: parseBooleanishValue(argv.encrypt_enable) ? !!ENCRYPT_KEY : false,
  algorithm: argv.encrypt_algorithm || 'aes-256-ecb',
}
