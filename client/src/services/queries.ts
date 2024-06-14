import { useQuery } from '@tanstack/react-query'
import { getAllTasks, getSingleTask } from './api'

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks,
  })
}

export const useGetSingleTask = (id: string) => {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => getSingleTask(id),
  })
}
