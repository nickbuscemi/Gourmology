import React from 'react';
import useScrollTrigger from '@/hooks/useScrollTrigger';

interface About2Props {
  title: string;
  paragraphs: string[];
}

const About2: React.FC<About2Props> = ({ title, paragraphs }) => {
  const [isVisibleText, textRef] = useScrollTrigger();

  return (
    <div>
      <section id='about' className="overflow-hidden pb-12 lg:pt-[90px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div ref={textRef} className={`flex flex-wrap items-center justify-center -mx-4
            ${isVisibleText ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
            
            <div className="w-full px-4">
              <div className="font-garamond tracking-widest">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  {title}
                </h2>
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-5 text-base text-body-color dark:text-dark-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
