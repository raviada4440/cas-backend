import './global/dotenv.global'

import { AxiosRequestConfig } from 'axios'
import { argv } from 'zx-cjs'

import { parseBooleanishValue } from './constants/parser.utilt'
import { isDev } from './shared/utils/environment.util'
import { machineIdSync } from './shared/utils/machine.util'

export const API_VERSION = 1

console.log(argv)

const { PORT: ENV_PORT, MX_ENCRYPT_KEY } = process.env

export const PORT = argv.port || ENV_PORT || 3333

export const CROSS_DOMAIN = {
  allowedOrigins: ['localhost:3000', '127.0.0.1:3000', '^(.+\\.)?casandra\\.ai$'],
  allowedReferer: 'casandra.ai',
}

const DEFAULT_REDIS_HOST = 'localhost'
const DEFAULT_REDIS_PORT = 6379

const upstashRedisUrl = process.env.UPSTASH_REDIS_URL
let redisHost = argv.redis_host ?? process.env.REDIS_HOST ?? DEFAULT_REDIS_HOST
let redisPort =
  Number(argv.redis_port ?? process.env.REDIS_PORT ?? DEFAULT_REDIS_PORT) || DEFAULT_REDIS_PORT
let redisPassword = argv.redis_password ?? process.env.REDIS_PASSWORD ?? null
let redisUsername = argv.redis_username ?? process.env.REDIS_USERNAME ?? null
let redisTls = false

if (upstashRedisUrl) {
  try {
    const parsed = new URL(upstashRedisUrl)
    redisHost = parsed.hostname
    redisPort = parsed.port ? Number(parsed.port) : DEFAULT_REDIS_PORT
    redisPassword = parsed.password || null
    redisUsername = parsed.username || null
    redisTls = parsed.protocol === 'rediss:'
  } catch (error) {
    console.warn('Invalid UPSTASH_REDIS_URL provided, falling back to default Redis config.')
  }
}

export const REDIS = {
  host: redisHost,
  port: redisPort,
  password: redisPassword,
  username: redisUsername,
  tls: redisTls,
  ttl: null,
  httpCacheTTL: 5,
  max: 5,
  disableApiCache: (isDev || argv.disable_cache) && !process.env['ENABLE_CACHE_DEBUG'],
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
