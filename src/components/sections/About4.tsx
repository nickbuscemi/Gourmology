import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import useScrollTrigger from '@/hooks/useScrollTrigger';

interface About4Props {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

const About4: React.FC<About4Props> = ({ title, paragraph, buttonText, buttonLink }) => {
  const [isVisibleText, textRef] = useScrollTrigger();

  return (
    <div>
      <section id='about' className="overflow-hidden pb-12 lg:pt-[90px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            
            <div ref={textRef} 
            className={`w-full px-4
            ${isVisibleText ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}
            >
              <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  {title}
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  {paragraph}
                </p>
                <Button className='bg-cream1 text-dark-2 rounded-lg'>
                  <Link to={buttonLink}>{buttonText}</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About4;
