import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CateringMenuProps {
  images: string[];
}

const CateringMenu:React.FC<CateringMenuProps> = ({ images }) => {
  const [currentIndex] = useState(0); // Added setCurrentIndex to manage state properly
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


  return (
    <div className='bg-dark-1 mt-10 flex justify-center items-center'>
      {isMobile ? (
        <div className='w-full'>
          {images.map((img, index) => (
            <div key={index} className='flex justify-center'>
              <img 
                src={img}
                alt={`Catering Menu ${index + 1}`} 
                className='w-full h-auto mb-4' // Adjust width, height and margin as needed
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='bg-dark-1 md:w-3/4'>
          <Carousel>
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className={` ${currentIndex === index ? 'active' : ''}`}>
                  <div className='flex justify-center items-center'>
                    <img 
                      src={img}
                      alt={`Catering Menu ${index + 1}`} 
                      className='h-auto rounded-lg' 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default CateringMenu;
