import { useEffect, useRef, useState } from 'react';
/*import instagram from '../../../public/assets/icons/instagram.svg'
import facebook from '../../../public/assets/icons/facebook.svg'
import email from '../../../public/assets/icons/email.svg'
import phone from '../../../public/assets/icons/phone.svg'*/
import video1 from '../../../public/videos/site-videos/video1.mp4'
import video1gif from '../../../public/videos/site-videos/video1gif.gif'
//import { Link } from 'react-router-dom'
//import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig'
import { cloudFlareIcons } from '@/data/cloudFlareImagesConfig';
import '../../App.css'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function Hero2() {
  const videoRef = useRef<HTMLVideoElement>(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [opacity, setOpacity] = useState(1); 


  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight; 
      const currentScroll = window.scrollY; 
      const newOpacity = 1 - currentScroll / maxScroll;
      setOpacity(Math.max(0, newOpacity)); 
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const tryPlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.log("Initial play attempt failed:", err);
          
        });
      }
    };
  
    tryPlayVideo(); 
  
    
    const handleFirstInteraction = () => {
      tryPlayVideo();
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  
    window.addEventListener('touchstart', handleFirstInteraction);
  
    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);
  

  const scrollToAbout = () => {
    const about = document.getElementById('about');
    about?.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <>
      {/* Hero */}
      <div 
      className="hero-container py-24 lg:py-3"
        style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width: '100%',
            height: '86.5vh', 
            overflow: 'hidden',
            opacity: opacity, 
        }}>
          {isMobile ? (
            <img
              src={video1gif}
              alt="Background"
              style={{
                position: 'absolute',
                width: '100%',
                height: '113%',
                top: '0',
                left: '0',
                objectFit: 'cover',
                zIndex: -10
              }}
            />
        ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              ref={videoRef}
              
              style={{
                position: 'absolute',
                width: '100%',
                height: '111%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',  
                objectFit: 'cover',  
                zIndex: -10  
              }}
              src={video1}  
              className='video1'
            >
              Your browser does not support the video tag.
            </video>
          )}
        {/* End Gradients */}
        <div className="relative z-10 animate__animated animate__fadeIn animate__slower">
          <div className="container py-6 lg:py-44">
            <div className="max-w-3xl text-center mx-auto">
              {/* Title */}
              <div className="mt-0 max-w-7xl pb-4 md:pb-10">
                <h1 className="font-garamond text-cream1 font-normal italic tracking-widest scroll-m-20 text-xl md:text-xl lg:text-2xl">
                  Long Island & New York City
                </h1>
              </div>
              <div className="mt-4 pb-2 md:pb-3 animate__animated animate__fadeIn animate__slower animate__delay-1s">
                <img 
                  src="https://akqmdqkuzjliggqqmlaj.supabase.co/storage/v1/object/public/Gourmology/logos/site-logo-words-white.png" 
                  alt="Gourmology" 
                  className="mx-auto"
                  width='full'
                />
              </div>
              
              <div className="mt-4 md:mt-8 max-w-3xl">
                <p className="text-l md:text-xl text-muted-foreground font-garamond tracking-widest ">
                  Enjoy the taste of restaurant cuisine from the comfort of your own home or event space.
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center pt-12'>
            <Button className='text-cream1 hover:bg-dark-3 hover:opacity-50 tracking-widest rounded-lg font-garamond text-lg'>
                  <Link to='/contact'>Book Today</Link>
            </Button>
          </div>
          </div>
          <div className="absolute -bottom-0 top-84 lg:bottom-36 w-full text-center lg:-mb-32 -mb-24">
          <div className="cursor-pointer">
            <div className="scroll-down flex justify-center">
            <img 
                src={cloudFlareIcons.downIcon} 
                alt="Scroll down"
                style={{
                    height: '30px', 
                    width: '30px',  
                }}
                onClick={scrollToAbout}
                />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
