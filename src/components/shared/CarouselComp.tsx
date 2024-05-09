import paella from '../../../public/assets/images/site-images/foodImages/paella.png';
import shrimp from '../../../public/assets/images/site-images/foodImages/shrimp.jpg';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComp() {
  // An array of the images to cycle through in the carousel
  const images = [paella, shrimp];

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-0">
              <Card className='border-0'>
                <CardContent className="flex items-center justify-center p-0" style={{ width: '100%', height: '45vh' }}> {/* Set a fixed height */}
                  <img 
                    src={images[index % images.length]} 
                    alt={`Food image ${index + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'fill' }}  
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
