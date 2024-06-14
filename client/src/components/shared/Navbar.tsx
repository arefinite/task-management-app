
import { ClipboardCheck, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  
  SheetTrigger,
} from '../ui/sheet'
import { navs } from '@/utils/navs'

const Navbar = () => {
  return (
    <nav className='flex bg-muted py-4'>
      <section className='flex justify-between center'>
        <div className='flex gap-2 items-center'>
          <ClipboardCheck size={30}  />
          <h1 className='text-2xl font-bold'>
            <Link to='/'>Task Management</Link>
          </h1>
        </div>
        <ul className='gap-6 hidden md:flex'>
          {navs.map((nav, i) => (
            <li key={i}>
              <NavLink to={nav.href}>{nav.label}</NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile navigation */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className='w-[250px]'>
              <SheetHeader>
                <SheetDescription>
                  <ul className='gap-2 mt-4 text-left flex-col flex'>
                    {navs.map((nav, i) => (
                      <NavLink to={nav.href} key={i}>
                        <SheetClose asChild>
                          <li key={i}>{nav.label}</li>
                        </SheetClose>
                      </NavLink>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </nav>
  )
}
export default Navbar