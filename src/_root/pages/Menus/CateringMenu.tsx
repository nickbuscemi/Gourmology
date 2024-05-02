import { useState, useEffect } from 'react';
import CateringMenuImg1 from '../../../../public/assets/Menus/CateringMenu1.jpg';
import CateringMenuImg2 from '../../../../public/assets/Menus/CateringMenu2.png';
import CateringMenuImg3 from '../../../../public/assets/Menus/CateringMenu3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CateringMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [CateringMenuImg1, CateringMenuImg2, CateringMenuImg3];
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

    <div className='bg-dark-1 p-10 md:px-48 flex justify-center items-center'>
      
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
        <div className='bg-dark-1 pt-8 md:w-3/4'>
        <Carousel>
          <CarouselContent className=''>
            {images.map((img, index) => (
              <CarouselItem key={index} className={` ${currentIndex === index ? 'active' : ''}`}>
                <div className='flex justify-center items-center'>
                <img 
                  src={img}
                  alt={`Catering Menu ${index + 1}`} 
                  className='h-auto' 
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
      {/*<div>
        <section id='about2' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark-1">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center -mx-4">
              
              
              <div className="w-full px-4">
                <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
                  <h2 className="mb-5 text-3xl text-center font-bold text-cream1 sm:text-[40px]/[48px]">
                    Not quite what your looking for?
                  </h2>
                  <p className="mb-5 text-base text-center text-body-color dark:text-dark-6">
                  Please feel free to contact us so we can explore
                  more details on how we can customize a superb menu for you.
                  </p>
                  <div className="flex justify-center pt-4"> 
                    <a href="tel:+13474537738">
                      <Button className='bg-cream1 items-center justify-center text-dark-2 rounded-sm'>Call Us!</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>*/}
    </div>
  );
};

export default CateringMenu;
