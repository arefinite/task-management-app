
import { auth } from '@/firebase/firebase.config'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {  SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export interface User {
  email: string
  password: string
}

const RegisterBox = () => {
  const [createUserWithEmailAndPassword, ,, error] =
    useCreateUserWithEmailAndPassword(auth)
  const { register, handleSubmit } = useForm<User>()
  const navigate = useNavigate()

  const handleCreateUser: SubmitHandler<User> = async userInfo => {
    const success = await createUserWithEmailAndPassword(
      userInfo.email,
      userInfo.password
    )
    if (success) {
      navigate('/')
    }
    if(error) {
      console.log(error)
    }
  }

  return (
    <main>
      <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
        <div className='flex items-center justify-center [&>div]:w-full'>
          <div className='rounded-xl border bg-card text-card-foreground shadow'>
            <div className='flex flex-col p-6 space-y-1'>
              <h3 className='font-semibold tracking-tight text-2xl'>
                Create an account
              </h3>
              <p className='text-sm text-muted-foreground'>
                Enter your credentials below to create your account
              </p>
            </div>
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <div className='p-6 pt-0 grid gap-4'>
                <div className='grid gap-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                    id='email'
                    placeholder='m@example.com'
                    type='email'
                    {...register('email')}
                  />
                </div>
                <div className='grid gap-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <input
                    className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                    id='password'
                    type='password'
                    {...register('password')}
                  />
                </div>
                <p className='text-red-500'>{error && error.message}</p>
              </div>
              
              <div className='flex items-center p-6 pt-0'>
                
                <button
                  role='submit'
                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full'
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
export default RegisterBox
