//import fish from '../../../public/assets/images/site-images/foodImages/fish.png'
//import steak from '../../../public/assets/images/site-images/foodImages/steak.png'
import lamb from '../../../public/assets/images/site-images/foodImages/lamb.jpg'
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
      <section id='about' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
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
                          src={lamb}
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                
              
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 font-garamond tracking-widest text-cream1 text-lg">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  Tailored to your needs.
                </h2>
                <p className="mb-5 text-base text-body-color">
                Any occasion. Big or small. We help create extraordinary dinners, 
                social gatherings, and celebratory events by placing a strong emphasis 
                on personalized customer service, in addition to a diverse menu packed
                with crisp flavors & fresh ingredients. Ensuring you and your 
                guests will be raving for weeks to come!
                </p>
                <h1 className='mb-4'>Check out our menus!</h1>
                <Button className='bg-cream1 text-dark-2 rounded-sm'>menus</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About