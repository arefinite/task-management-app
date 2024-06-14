import 'dotenv/config'

const _config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  NODE_EVN: process.env.NODE_EVN,
  FRONTEND_URL: process.env.FRONTEND_URL,
}

export const config = Object.freeze(_config)
