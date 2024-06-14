import { model, Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: String, required: true },
    priority: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Task = model('Task', taskSchema)
