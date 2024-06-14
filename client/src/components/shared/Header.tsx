import { ModeToggle } from '../theme/ModeToggle'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.config'

const Header = () => {
  const [user] = useAuthState(auth)
  const [signOut] = useSignOut(auth)
  const navigate = useNavigate()
  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }
  
  return (
    <header className='center py-4 flex justify-end'>
      <div className='flex gap-2 items-center'>
        {user ? (
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex items-center gap-2 justify-end'>
            <Avatar>
              <AvatarImage
                src={user?.photoURL ?? 'https://github.com/shadcn.png'}
                alt='avatar.png'
                className='h-8 w-8 rounded-full'
              />
              <AvatarFallback>
                <img
                  src='http://github.com/shacn.png'
                  alt='avatar'
                  className='h-8 w-8 rounded-full'
                />
              </AvatarFallback>
            </Avatar>
            <p>Welcome {user.displayName ?? user.email}</p>
          </div>
            <div className='flex gap-2 items-center'>
            <Button variant='outline' asChild>
              <Link to='/dashboard/home'>Dashboard</Link>
            </Button>
            <Button variant='destructive' onClick={handleSignOut}>
              Logout
            </Button>
            <ModeToggle />
           </div>
          </div>
        ) : (
          <>
            <Button asChild>
              <Link to='/login'>Login/Register</Link>
            </Button>
            <ModeToggle />
          </>
        )}
      </div>
    </header>
  )
}
export default Header