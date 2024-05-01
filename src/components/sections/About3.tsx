import fish from '../../../public/assets/images/site-images/foodImages/fish.png'
//import steak from '../../../public/assets/images/site-images/foodImages/steak.png'
//import lamb from '../../../public/assets/images/site-images/foodImages/lamb.jpg'
//import table1 from '../../../public/assets/images/site-images/eventImages/table1.jpg'
//import { useState, useEffect } from 'react'
import { Button } from '../ui/button'

const About = () => {

  /*const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    }
  }, []);*/

  return (
    <div>
      <section id='about' className="overflow-hidden lg:pt-[120px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 font-garamond tracking-widest text-cream1 text-lg">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  Its kind of our thing.
                </h2>
                <p className="mb-5 text-base text-body-color">
                  Welcome to GOURMOLOGY, where we specialize in eclectic food that entices 
                  every type of palate with our mix of Italian, Spanish, and American 
                  contemporary cuisine.
                </p>
                <p className="mb-8 text-base text-body-color">
                  We bring the restaurant experience to the comfort of your own home. Our private
                  dining experience includes everything you need to have an unforgettable evening.
                </p>
                <h1 className='mb-4'>Tell us about your next event!</h1>
                <Button className='bg-cream1 text-dark-2 rounded-sm'>Consultation</Button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                
                  
                    {/*<div className="w-full px-3 sm:px-4 xl:w-full">
                      <div className="py-3 sm:py-4">
                        <img
                          src={table1}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <div className="py-3 sm:py-4">
                        <img
                          src={lamb}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                </div>*/}
                    <div className="w-full px-3 sm:px-4 xl:w-full">
                      <div className="relative z-10 my-4">
                        <img
                          src={fish}
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About