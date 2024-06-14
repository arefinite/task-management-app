import { model, Schema } from 'mongoose'
import { TaskType } from '../type/task.type'

const taskSchema = new Schema<TaskType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Task = model('Task', taskSchema)

