import { z } from 'zod'

// * add task from schema
export const addTaskFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title has to be at least 3 characters long' }),
  deadline: z.string().min(3, { message: 'Please enter a valid deadline' }),
  priority: z
    .string()
    .min(3, { message: 'Priority has to be at least 3 characters long' }),
  status: z
    .string()
    .min(3, { message: 'Status has to be at least 3 characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description has to be at least 3 characters long' }),
})

export type AddTaskFormSchema = z.infer<typeof addTaskFormSchema>
