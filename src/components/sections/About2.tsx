import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import paella from '../../../public/assets/images/site-images/foodImages/paella.png';
import shrimp from '../../../public/assets/images/site-images/foodImages/shrimp.jpg';
import { useState, useEffect } from 'react';

const About2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <section id='about2' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            
            {/* Text section now on the left */}
            <div className="w-full px-4">
              <div className="font-garamond tracking-widest">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  All-inclusive Experience.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  We provide an all-inclusive dining experience that includes 
                  three or four courses, priced at $85 or $100 per person respectively. 
                  We do not provide linen, so you have the liberty of choosing your 
                  preferred style.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  After the meal, we will leave your kitchen clean, 
                  just how we found it.                
                </p>
              </div>
            </div>

            {/* Images section now on the right */}
            <div className="w-full  lg:w-full">
                <div className="flex items-center -mx-3 sm:-mx-4">
                    {isMobile ? (
                    // Mobile view: Render only one image
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <div className="w-full px-3 sm:px-4">
                                    <div className="aspect-square w-full overflow-hidden">  {/* Ensures the container is a square */}
                                        <img
                                            src={paella}
                                            alt=""
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="w-full px-3 sm:px-4">
                                    <div className="aspect-square w-full overflow-hidden">  {/* Ensures the container is a square */}
                                        <img
                                            src={shrimp}
                                            alt=""
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    
                    ) : (
                    // Desktop view: Render all images side by side
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                              <div className="flex w-full px-3 sm:px-4 gap-28" style={{ maxHeight: '600px' }}>
                                <div className="w-full py-3 sm:py-4">
                                    <img
                                        src={paella}
                                        alt=""
                                        className="w-full h-full object-cover rounded-sm"
                                    />
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem>
                              <div className="flex w-full px-3 sm:px-4 gap-28" style={{ maxHeight: '560px' }}>
                                <div className="w-full py-3 sm:py-4">
                                    <img
                                        src={shrimp}
                                        alt=""
                                        className="w-full h-full object-cover rounded-sm"
                                    />
                                </div>
                              </div>
                            </CarouselItem>     
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    
                    )}
                </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
