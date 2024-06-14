import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { CircleGauge, FolderKanban, Menu, User } from 'lucide-react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase.config'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'

const SideNav = () => {
  const [signOut] = useSignOut(auth)
  const navigate = useNavigate()
  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }
  return (
    <main>
      <nav className='center hidden md:block'>
        <Card className=' w-[250px] mt-8 p-4'>
          <ul className='space-y-4'>
            <li className='flex gap-2'>
              <CircleGauge />
              <NavLink to='/dashboard/home'>Dashboard</NavLink>
            </li>
            <li className='flex gap-2'>
              <FolderKanban />
              <NavLink to='/dashboard/manage-tasks'>Manage Tasks</NavLink>
            </li>
            <li className='flex gap-2'>
              <User />
              <NavLink to='/dashboard/profile'>Profile</NavLink>
            </li>
          </ul>
          <Button
            onClick={handleSignOut}
            variant='destructive'
            size='sm'
            className='mt-4'
          >
            Logout
          </Button>
        </Card>
      </nav>
      {/* Mobile Nav */}
      <div className='md:hidden mt-8 pr-4'>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className='w-full' side='left'>
            <SheetHeader>
              <SheetDescription>
                <nav className='flex flex-col '>
                  <ul className='flex flex-col gap-4'>
                    <NavLink to='/dashboard/home'>
                      <SheetClose asChild>
                        <li className='flex gap-2 items-center'>
                          <CircleGauge color='gray' size={20} />
                          Dashboard
                        </li>
                      </SheetClose>
                    </NavLink>
                    <NavLink to='/dashboard/manage-tasks'>
                      <SheetClose asChild>
                        <li className='flex gap-2 items-center'>
                          <FolderKanban color='gray' size={20} />
                          Manage Products
                        </li>
                      </SheetClose>
                    </NavLink>
                    <NavLink to='/dashboard/profile'>
                      <SheetClose asChild>
                        <li className='flex gap-2 items-center'>
                          <User color='gray' size={20} />
                          Profile
                        </li>
                      </SheetClose>
                    </NavLink>
                  </ul>
                  <Button
                    onClick={handleSignOut}
                    variant='destructive'
                    size='sm'
                    className='mt-4 w-fit'
                  >
                    Logout
                  </Button>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  )
}
export default SideNav
