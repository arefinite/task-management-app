import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { Task } from '../models/task.model'
import createHttpError from 'http-errors'

// get all tasks
export const getAllTasks = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const tasks = await Task.find({})
    res.status(200).json(tasks)
  }
)

// get single task
export const getSingleTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) return next(createHttpError(404, 'Task not found'))
    res.status(200).json(task)
  }
)

// add task
export const addTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, deadline, priority } = req.body
    const newTask = await Task.create({
      title,
      description,
      deadline,
      priority,
    })
    if (!newTask) return next(createHttpError(400, 'Task add failed'))
    res.status(200).json('Task added successfully')
  }
)

// update task
export const updateTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { title, description, deadline, priority } = req.body
    const updateTask = await Task.findByIdAndUpdate(id, {
      title,
      description,
      deadline,
      priority,
    })
    if (!updateTask) return next(createHttpError(400, 'Task update failed'))
    res.status(200).json('Task updated successfully')
  }
)

// delete task
export const deleteTak = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    if (!task) return next(createHttpError(404, 'Task not found'))
    res.status(200).json({ message: 'Product deleted successfully' })
  }
)
