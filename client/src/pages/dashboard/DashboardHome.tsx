import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { useGetAllTasks } from '@/services/queries'
import { LoaderCircle } from 'lucide-react'
import { todo } from 'node:test'

const DashboardHome = () => {
  const { data: tasks, isPending } = useGetAllTasks()

  const todoTask = tasks?.filter(task => task.status === 'todo')
  const ongoingTask = tasks?.filter(task => task.status === 'ongoing')
  const completeTask = tasks?.filter(task => task.status === 'completed')

  if (isPending) {
    {
      isPending && <LoaderCircle className='animate-spin' />
    }
  }

  return (
    <main>
      <h1 className='text-xl font-bold my-8'>Welcome to Dashboard</h1>
      <div className='grid grid-cols-3 gap-6'>
        <div className='space-y-4'>
          <h1 className='text-xl font-semibold'>To-do</h1>
          {todoTask?.length ? (
            todoTask.map(task => (
              <Card key={task._id} className='p-3'>
                <div className='flex items-center justify-between'>
                  <p>{task.title}</p>
                  <Badge
                    variant={
                      task.priority === 'high'
                        ? 'destructive'
                        : task.priority === 'low'
                        ? 'outline'
                        : 'default'
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <p className='text-sm italic'>{task.deadline}</p>
              </Card>
            ))
          ) : (
            <div className='flex justify-center items-center h-full'>
              <Badge>No Task Found</Badge>
            </div>
          )}
        </div>
        <div className='space-y-4'>
          <h1 className='text-xl font-semibold'>On Going</h1>
          {ongoingTask?.length ? (
            ongoingTask.map(task => (
              <Card key={task._id} className='p-3'>
                <div className='flex items-center justify-between'>
                  <p>{task.title}</p>
                  <Badge
                    variant={
                      task.priority === 'high'
                        ? 'destructive'
                        : task.priority === 'low'
                        ? 'outline'
                        : 'default'
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <p className='text-sm italic'>{task.deadline}</p>
              </Card>
            ))
          ) : (
            <div className='flex justify-center items-center h-full'>
              <Badge>No Task Found</Badge>
            </div>
          )}
        </div>
        <div className='space-y-4'>
          <h1 className='text-xl font-semibold'>Completed</h1>
          {completeTask?.length ? (
            completeTask.map(task => (
              <Card key={task._id} className='p-3'>
                <div className='flex items-center justify-between'>
                  <p>{task.title}</p>
                  <Badge
                    variant={
                      task.priority === 'high'
                        ? 'destructive'
                        : task.priority === 'low'
                        ? 'outline'
                        : 'default'
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <p className='text-sm italic'>{task.deadline}</p>
              </Card>
            ))
          ) : (
            <div className='flex justify-center items-center h-full'>
              <Badge>No Task Found</Badge>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
export default DashboardHome
