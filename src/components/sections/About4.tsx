import { Button } from '../ui/button';
//import { useState, useEffect } from 'react';

const About2 = () => {
 /*const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);*/

  return (
    <div>
      <section id='about2' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            
            {/* Text section now on the left */}
            <div className="w-full px-4">
              <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  Fine Dining done your way.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                If you are in need of an upscale touch you’ve come to the right place.
                 We’ll create a meal, dinner party or event that you and your guests 
                 will absolutely love, and all at a great rate you will love just as 
                 much.
                </p>
                <Button className='bg-cream1 text-dark-2 rounded-sm'>Services</Button>
              </div>
            </div>

        

          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
