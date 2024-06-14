
import about from '/about.svg'

const About = () => {
  return (
    <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] pt-8 center'>
      <div className='w-1/2 justify-center hidden md:flex'>
        <img src={about} alt='contact' />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto gap-6 space-y-4'>
          <h1 className='text-3xl font-semibold'>About Us</h1>
          <p>
            Welcome to Task Management, your premier destination for efficient
            and effective task management solutions. We're dedicated to giving
            you the very best tools for organizing, prioritizing, and completing
            your tasks, with a focus on simplicity, reliability, and user
            satisfaction.
          </p>

          <p>
            At Task Management, we understand the importance of staying
            organized and productive. Our mission is to empower individuals and
            teams to achieve their goals with ease. Our intuitive platform is
            designed to streamline your workflow, helping you to manage your
            tasks effortlessly.
          </p>

          <p>
            We pride ourselves on providing top-notch customer service. Our
            friendly and knowledgeable support team is always here to assist
            you, whether you need help navigating our features or have questions
            about your account.
          </p>

          <p>
            Task Management offers a seamless and enjoyable user experience. We
            continuously innovate and enhance our platform to ensure it meets
            your evolving needs. Each feature is carefully crafted with your
            productivity in mind, reflecting our commitment to excellence and
            user-centric design.
          </p>

          <p>
            We hope Task Management becomes an indispensable part of your daily
            routine, helping you stay organized and focused. If you have any
            questions or feedback, please don't hesitate to reach out to us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
