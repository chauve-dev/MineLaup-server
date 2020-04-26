import express, { Application } from 'express'
import bodyParser from 'body-parser'

/**
 * Configuring Express application
 */
const app: Application = express()

/**
 * Registering parsers
 */
app.use(
  bodyParser.json({
    limit: '50mb',
  })
)

export default {
  path: '/api',
  handler: app,
}
