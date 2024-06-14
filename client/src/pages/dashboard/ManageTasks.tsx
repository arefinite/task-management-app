import { useGetAllTasks } from '@/services/queries'
import SitePath from '@/components/shared/SitePath'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDeleteTask } from '@/services/mutations'
import { useState } from 'react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'

const ManageTasks = () => {
  const [deleteTaskId, setDeleteTaskId] = useState<string>('')
  const { data: tasks, isPending, isError, error } = useGetAllTasks()
  const { mutateAsync: deleteTaskAsync } = useDeleteTask()

  const handleDeleteTask = async (id: string) => {
    await deleteTaskAsync(id)
    toast('Task deleted successfully')
  }

  return (
    <main className='flex flex-col gap-8 my-8 w-full'>
      <SitePath items={false} currentPage='Manage Tasks' />
      <Button className='w-fit' asChild>
        <Link to='/dashboard/manage-tasks/add-task'>Add Task</Link>
      </Button>
      <h1 className='text-xl font-bold'>List of Tasks</h1>

      {isPending && <LoaderCircle className='animate-spin' />}
      {isError && (
        <div className='p-4 bg-red-100 text-red-500 rounded-lg'>
          {error?.message}
        </div>
      )}
      {tasks && Array.isArray(tasks) && (
        <Table className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead>Task Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map(task => (
              <TableRow key={task._id}>
                <TableCell className='font-medium'>{task.title}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
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
                </TableCell>

                <TableCell>{task.deadline}</TableCell>

                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary' asChild>
                    <Link
                      to={`/dashboard/manage-tasks/update-task/${task._id}`}
                    >
                      Update
                    </Link>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button
                          variant='destructive'
                          onClick={() => setDeleteTaskId(task._id!)}
                        >
                          Delete
                        </Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the product from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDeleteTaskId('')}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteTask(deleteTaskId)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  )
}

export default ManageTasks
