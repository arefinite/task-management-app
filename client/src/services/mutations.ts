import { TaskType } from '@/types/task'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTask, deleteTask, updateTask } from './api'

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: TaskType) => addTask(data),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['tasks'] })
      }
    },
  })
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['tasks'] })
      }
    },
  })
}

export const useUpdateTask = (id: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (task: TaskType) => updateTask(id, task),
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['tasks'] })
      }
    },
  })
}
