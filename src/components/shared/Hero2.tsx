import { useEffect, useRef, useState } from 'react';
import instagram from '../../../public/assets/icons/instagram.svg'
import facebook from '../../../public/assets/icons/facebook.svg'
import email from '../../../public/assets/icons/email.svg'
import phone from '../../../public/assets/icons/phone.svg'
import logoWords from '../../../public/assets/images/logos/site-logo-words-white.png'
import downIcon from '../../../public/assets/icons/downIcon.svg'
import video1 from '../../../public/videos/site-videos/video1.mp4'
import video1gif from '../../../public/videos/site-videos/video1gif.gif'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function Hero2() {
  const videoRef = useRef<HTMLVideoElement>(null); // Create a ref object for the video
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [opacity, setOpacity] = useState(1); // Initially fully visible


  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight; // Maximum scroll value before the hero fades away completely
      const currentScroll = window.scrollY; // Current scroll position
      const newOpacity = 1 - currentScroll / maxScroll;
      setOpacity(Math.max(0, newOpacity)); // Ensure opacity doesn't go below 0
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
          // Optionally set a state to show a manual play button to users
        });
      }
    };
  
    tryPlayVideo(); // Attempt to play on mount
  
    // Listener for the first user interaction
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
                transform: 'translate(-50%, -50%)',  // Centers the video exactly in the viewport
                objectFit: 'cover',  // Ensures the video covers the full area without stretching
                zIndex: -10  // Places the video under other content
              }}
              src={video1}  // Assuming hero1 is your video file path now
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
                <h1 className="font-garamond text-cream1 font-normal italic tracking-widest scroll-m-20 text-l md:text-xl lg:text-2xl">
                  Long Island & New York City
                </h1>
              </div>
              <div className="mt-4 pb-2 md:pb-3 animate__animated animate__fadeIn animate__slower animate__delay-1s">
                {/*<h1 className="font-['oswald'] font-[300] tracking-wide scroll-m-20 text-6xl md:text-7xl lg:text-9xl">
                  GOURMOLOGY
      </h1>*/}
                <img 
                  src={logoWords}  
                  alt="Gourmology" 
                  className="mx-auto"
                  width='full'
                />
              </div>
              {/* End Title */}
              <div className="mt-4 md:mt-8 max-w-3xl">
                <p className="text-sm md:text-xl text-muted-foreground font-garamond tracking-widest ">
                  Enjoy the taste of restaurant cuisine from the comfort of your own home or event space.
                </p>
              </div>
              
              <div className="mt-8 mb-8 gap-12 flex justify-center">
                <Link to='https://www.instagram.com/gourm.ology/' >
                <span>
                  <img src={instagram} alt="Instagram" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
                </span>
                </Link>
                <span>
                  <img src={email} alt="Email" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
                </span>
                <span>
                  <a href="tel:+13474537738">
                    <img src={phone} alt="Phone" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
                  </a>
                </span>
                <Link to='https://www.facebook.com/Gourmology/'>
                <span>
                  <img src={facebook} alt="Facebook" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
                </span>
                </Link>
              </div>
              {/* End Buttons */}
            </div>
          </div>
          <div className="absolute bottom lg:bottom-10 w-full text-center">
          <div className="cursor-pointer">
            <div className="scroll-down flex justify-center">
            <img 
                src={downIcon} 
                alt="Scroll down"
                style={{
                    height: '40px', // Set appropriate size
                    width: '40px',  // Maintain aspect ratio
                }}
                onClick={scrollToAbout}
                />
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
