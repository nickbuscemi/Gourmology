import { useEffect, useRef, useState } from 'react';
import video1 from '../../../public/videos/site-videos/video1.mp4'
import video1gif from '../../../public/videos/site-videos/video1gif.gif'
import '../../App.css'

export default function Hero() {
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
  
  return (
    <>
      {/* Hero */}
      <div 
      className="hero-container py-24 lg:py-3"
        style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width: '100%',
            height: '50%', 
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
                height: '56%',
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
                height: '100%',
                top: '5%',
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
          <div className="container py-6 lg:py-4">
            <div className="max-w-3xl text-center mx-auto">
              {/* Title */}
              <div className="md:mt-24 max-w-7xl md:pb-10 mb-[-130px] md:mb-0">
                <h3 className="font-garamond text-cream1 font-normal italic tracking-widest scroll-m-20 text-2xl md:text-3xl lg:text-4xl">
                  Bringing people together for life's special moments
                </h3>
              </div>
              {/* End Title */}
              
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
