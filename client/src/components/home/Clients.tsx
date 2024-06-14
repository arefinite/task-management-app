import { clients } from '@/utils/clients'
import { Card, CardContent } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

const Clients = () => {
  return (
    <section className='center py-8'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-bold'>
          Our Exclusive Clients
        </h2>
      </div>
      <div>
        <Carousel className='w-full py-10'>
          <CarouselContent className='-ml-1'>
            {clients &&
              clients.map(client => (
                <CarouselItem
                  key={client.id}
                  className='pl-1 md:basis-1/2 lg:basis-1/5'
                >
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <div className='flex flex-col gap-2'>
                          <img
                            src={client.logo}
                            alt={client.name}
                            className='w-fit h-36 object-cover'
                          />
                          <span className=' font-semibold text-center mt-4'>{client.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
export default Clients
