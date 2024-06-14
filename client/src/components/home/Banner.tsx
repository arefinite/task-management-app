import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Shopping from '/banner.svg'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-8 py-10'>
      <div className='space-y-4 flex-1 order-2 md:order-2'>
        <p>Take Control of Your Tasks with TaskMaster Pro!</p>
        <h1 className='text-4xl font-bold'>
          Boost Your Productivity by up to 50%
        </h1>
        <p>
          Experience the ultimate in task management and increase your
          efficiency by up to 50%! Stay organized and achieve your goals with
          ease using TaskMaster Pro's innovative features. Don’t miss out on
          maximizing your productivity—get started now!
        </p>

        <Button asChild>
          <Link to='/login'>{`Let's Explore`}</Link>
        </Button>
      </div>
      <div className='flex-1 order-1 md:order-2'>
        {' '}
        <img src={Shopping} alt='shopping' />
      </div>
    </div>
  )
}
export default Banner
