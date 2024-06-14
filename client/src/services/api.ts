import { TaskType } from '@/types/task'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({
  baseURL,
})

export const addTask = async (data: TaskType) => {
  return await axios.post(`${baseURL}/task`, data)
}

export const getAllTasks = async () => {
  return (await apiClient.get<TaskType[]>(`${baseURL}/task/all-tasks`)).data
}

export const deleteTask = async (id: string) => {
  return await apiClient.delete(`${baseURL}/task/${id}`)
}

export const getSingleTask = async (id: string) => {
  return (await apiClient.get<TaskType>(`${baseURL}/task/${id}`)).data
}

export const updateTask = async (id: string, data: TaskType) => {
  return await apiClient.patch(`${baseURL}/task/${id}`, data)
}

export const updateTaskStatus = async (
  id: string,
  status: string
): Promise<TaskType> => {
  const response = await axios.patch(`${baseURL}/task/${id}`, { status })
  return response.data
}
