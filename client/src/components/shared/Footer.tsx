import { Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-muted py-4 text-sm'>
      <section className='flex flex-col md:flex-row center items-center  justify-between'>
        <div className='flex gap-2 items-center'>
          <div>&copy; {year} by Arefinite | All Rights Reserved</div>
          <a href='https://www.facebook.com/arefinite' target='_blank'>
            <Facebook size={16} />
          </a>
          <a href='https://x.com/arefinite' target='_blank'>
            <Twitter size={16} />
          </a>
        </div>
        <div>Design and Developed by Adnan Arefin</div>
      </section>
    </footer>
  )
}
export default Footer
