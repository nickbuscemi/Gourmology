import { Button } from '../ui/button'
import 'animate.css'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import { Link } from 'react-router-dom'
import { cloudFlareImages } from '@/data/cloudFlareImagesConfig'

const About = () => {

  const [isVisibleText, textRef] = useScrollTrigger();
  const [isVisibleImage, imageRef] = useScrollTrigger();
  
  return (
    <div>
      <section id='about' className="overflow-hidden lg:pt-[140px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            
          <div 
              ref={textRef} 
              className={`w-full px-4 lg:w-1/2 xl:w-5/12 
              ${isVisibleText ? 'animate__animated animate__fadeInLeft animate__slower' : ''}`}
            >
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
                <Button className='bg-cream1 text-dark-2 rounded-sm'>
                  <Link to='/contact'>Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div 
                  ref={imageRef} 
                  className={`w-full px-3 sm:px-4 xl:w-full 
                  ${isVisibleImage ? 'animate__animated animate__fadeInDown animate__slower' : ''}`}
                >
                  <div className="relative z-10 my-4">
                    <img
                      src={cloudFlareImages.fish}
                      alt="A delicious dish of fish"
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