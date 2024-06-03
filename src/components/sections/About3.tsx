import React from 'react';
import { Button } from '../ui/button';
import 'animate.css';
import useScrollTrigger from '@/hooks/useScrollTrigger';
import { Link } from 'react-router-dom';

interface AboutProps {
  sectionId: string;
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
}

const About: React.FC<AboutProps> = ({ sectionId, title, paragraphs, buttonText, buttonLink, imageSrc, imageAlt }) => {
  const [isVisibleText, textRef] = useScrollTrigger();
  const [isVisibleImage, imageRef] = useScrollTrigger();

  return (
    <div>
      <section id={sectionId} className="overflow-hidden lg:pt-[140px] lg:pb-[90px] bg-dark-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div
              ref={textRef}
              className={`w-full px-4 lg:w-1/2 xl:w-5/12 ${isVisibleText ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}
            >
              <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 font-garamond tracking-widest text-cream1 text-lg">
                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                  {title}
                </h2>
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-5 text-base text-body-color">
                    {paragraph}
                  </p>
                ))}
                {buttonText && buttonLink && (
                  <>
                    <h1 className='mb-4'>Tell us about your next event!</h1>
                    <Button className='bg-cream1 text-dark-2 rounded-lg'>
                      <Link to={buttonLink}>{buttonText}</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div
                  ref={imageRef}
                  className={`w-full px-3 sm:px-4 xl:w-full ${isVisibleImage ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}
                >
                  <div className="relative z-10 my-4">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full rounded-lg"
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
};

export default About;
