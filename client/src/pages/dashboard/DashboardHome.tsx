import { useEffect, useState, FC } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { useGetAllTasks } from '@/services/queries'
import { LoaderCircle } from 'lucide-react'
import { useDrag, useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TaskType } from '@/types/task'

interface DragItem {
  type: string
  task: TaskType
}

const ItemType = {
  TASK: 'task',
}

const DashboardHome: FC = () => {
  const { data: tasks, isPending } = useGetAllTasks()
  const [todoTask, setTodoTask] = useState<TaskType[]>([])
  const [ongoingTask, setOngoingTask] = useState<TaskType[]>([])
  const [completeTask, setCompleteTask] = useState<TaskType[]>([])

  useEffect(() => {
    if (tasks) {
      setTodoTask(tasks.filter(task => task.status === 'todo'))
      setOngoingTask(tasks.filter(task => task.status === 'ongoing'))
      setCompleteTask(tasks.filter(task => task.status === 'completed'))
    }
  }, [tasks])

  if (isPending) {
    return <LoaderCircle className='animate-spin' />
  }

  const moveTask = (task: TaskType, toStatus: string) => {
    const sourceList = getList(task.status)
    const destinationList = getList(toStatus)

    const updatedSourceList = sourceList.filter(t => t._id !== task._id)
    const updatedDestinationList = [...destinationList, { ...task, status: toStatus }]

    setList(task.status, updatedSourceList)
    setList(toStatus, updatedDestinationList)
  }

  const getList = (status: string) => {
    switch (status) {
      case 'todo':
        return todoTask
      case 'ongoing':
        return ongoingTask
      case 'completed':
        return completeTask
      default:
        return []
    }
  }

  const setList = (status: string, list: TaskType[]) => {
    switch (status) {
      case 'todo':
        setTodoTask(list)
        break
      case 'ongoing':
        setOngoingTask(list)
        break
      case 'completed':
        setCompleteTask(list)
        break
    }
  }

  const TaskCard: FC<{ task: TaskType }> = ({ task }) => {
    const [, dragRef] = useDrag({
      type: ItemType.TASK,
      item: { type: ItemType.TASK, task },
    })

    return (
      <Card ref={dragRef} className='p-3 mb-2'>
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
    )
  }

  const TaskList: FC<{ status: 'todo' | 'ongoing' | 'completed'; tasks: TaskType[] }> = ({ status, tasks }) => {
    const [, dropRef] = useDrop({
      accept: ItemType.TASK,
      drop: (item: DragItem) => {
        if (item.task.status !== status) {
          moveTask(item.task, status)
        }
      },
    })

    return (
      <div ref={dropRef} className='space-y-4'>
        <h1 className='text-xl font-semibold'>{status.charAt(0).toUpperCase() + status.slice(1)}</h1>
        {tasks.length ? (
          tasks.map(task => <TaskCard key={task._id} task={task} />)
        ) : (
          <div className='flex justify-center items-center h-full'>
            <Badge>No Task Found</Badge>
          </div>
        )}
      </div>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <h1 className='text-xl font-bold my-8'>Welcome to Dashboard</h1>
        <div className='grid grid-cols-3 gap-6'>
          <TaskList status='todo' tasks={todoTask} />
          <TaskList status='ongoing' tasks={ongoingTask} />
          <TaskList status='completed' tasks={completeTask} />
        </div>
      </main>
    </DndProvider>
  )
}

export default DashboardHome
