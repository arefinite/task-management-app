import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { globalErrorHandler } from './middleware/globalErrorHandler'
import { config } from '../config/config'
import path from 'path'
import { taskRouter } from './route/task.route'
export const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'))
}
app.use(
  cors({
    origin: config.FRONTEND_URL,
  })
)
app.use(express.static(path.join(__dirname, '../../../client/dist')))
//routes

app.use('/api/v1/task', taskRouter)

//global error handler
app.use(globalErrorHandler)
