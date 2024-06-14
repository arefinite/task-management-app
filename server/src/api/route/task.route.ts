import { Router } from 'express'
import {
  addTask,
  deleteTak,
  getAllTasks,
  getSingleTask,
  updateTask,
} from '../controller/task.controller'

export const taskRouter = Router()

taskRouter.get('/all-tasks', getAllTasks)
taskRouter.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTak)
taskRouter.post('/', addTask)
