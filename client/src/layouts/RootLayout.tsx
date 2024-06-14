import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Navbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default RootLayout