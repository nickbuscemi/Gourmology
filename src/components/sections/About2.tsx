
//import { CarouselComp } from "../shared/CarouselComp";
import useScrollTrigger from '@/hooks/useScrollTrigger';


const About2 = () => {

  const [isVisibleText, textRef] = useScrollTrigger();
 
  return (
    <div>
      <section id='about2' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[190px] bg-dark-1">
        <div className="container mx-auto">
          <div ref={textRef} className={`flex flex-wrap items-center justify-center -mx-4
            ${isVisibleText ? 'animate__animated animate__fadeInUp animate__slower' : ''}`}>
            
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
                <p className="mb-0 text-base text-body-color dark:text-dark-6">
                  After the meal, we will leave your kitchen clean, 
                  just how we found it.                
                </p>
              </div>
            </div>

            {/* Images section now on the right */}
            {/*<div className="w-full  lg:w-full md:pt-8">
                <CarouselComp />
  </div>*/}


          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
