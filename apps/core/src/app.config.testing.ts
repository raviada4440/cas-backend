import './global/dotenv.global'

import { AxiosRequestConfig } from 'axios'
import { argv } from 'zx-cjs'

import { isDev } from './shared/utils/environment.util'

console.log(argv)
export const PORT = argv.port || 3333
export const CROSS_DOMAIN = {
  allowedOrigins: [
    'innei.in',
    'shizuri.net',
    'localhost:9528',
    'localhost:2323',
    '127.0.0.1',
    'mbp.cc',
    'local.innei.test',
    '22333322.xyz',
  ],
  allowedReferer: 'innei.in',
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

export const ENCRYPT = {
  key: '',
  enable: false,
  algorithm: argv.encrypt_algorithm || 'aes-256-ecb',
}

export const CLUSTER = {
  enable: false,
  workers: argv.cluster_workers,
}
