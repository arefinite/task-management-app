import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import SitePath from '@/components/shared/SitePath'
import { Textarea } from '@/components/ui/textarea'

import { LoaderCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { addTaskFormSchema, AddTaskFormSchema } from '@/validators/FormSchema'
import { useAddTask } from '@/services/mutations'

const AddTask = () => {
  const navigate = useNavigate()
  const form = useForm<AddTaskFormSchema>({
    resolver: zodResolver(addTaskFormSchema),
    defaultValues: {
      title: '',
      deadline: '',
      status: 'todo',
      priority: '',
      description: '',
    },
  })
  const { mutateAsync: addTaskAsync, isPending } = useAddTask()

  const onSubmit: SubmitHandler<AddTaskFormSchema> = async data => {
    console.log(data)

    await addTaskAsync(data)
    toast('Task Added Successfully')
    navigate('/dashboard/manage-tasks')
  }

  return (
    <section className='mt-8'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <SitePath
              items={true}
              prevLink='/dashboard/manage-tasks'
              prevName='Manage Tasks'
              currentPage='Add Task'
            />
            <div className='items-center gap-4 hidden md:flex'>
              <Button variant={'outline'} asChild>
                <span className='ml-2'>
                  <Link to='/dashboard/manage-tasks'>Go Back</Link>
                </span>
              </Button>

              <Button type='submit' disabled={isPending}>
                {isPending && <LoaderCircle className='animate-spin' />}

                <span className='ml-2'>
                  {isPending ? 'Adding Task' : 'Add Task'}
                </span>
              </Button>
            </div>
          </div>
          <Card className='mt-6'>
            <CardHeader>
              <CardTitle>Add a new Task</CardTitle>
              <CardDescription>
                Fill out the form below to add a new task.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6'>
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input type='text' className='w-full' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='priority'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select priority for this task' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='low'>Low</SelectItem>
                          <SelectItem value='medium'>Medium</SelectItem>
                          <SelectItem value='high'>High</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a status for this task' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='todo'>To-do</SelectItem>
                          <SelectItem value='ongoing'>ongoing</SelectItem>
                          <SelectItem value='completed'>Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='deadline'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type='date' className='w-full' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea rows={5} className='resize-none' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className='flex items-center gap-4 md:hidden'>
                <Button variant={'outline'}>
                  <span className='ml-2'>Go Back</span>
                </Button>

                <Button type='submit' disabled={isPending}>
                  {isPending && <LoaderCircle className='animate-spin' />}

                  <span className='ml-2'>
                    {isPending ? 'Adding Product' : 'Add Product'}
                  </span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  )
}

export default AddTask
