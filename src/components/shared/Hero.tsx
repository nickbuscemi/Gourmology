import { useEffect, useRef, useState } from 'react';
import video2 from '../../../public/videos/site-videos/video2.mp4'
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback rate to 0.5, making the video play at half speed
    }
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
            height: '100%', 
            overflow: 'hidden',
            opacity: opacity, 
        }}>
          {isMobile ? (
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
              top: '0%',
              left: '50%',
              transform: 'translate(-50%, -35%)',  // Centers the video exactly in the viewport
              objectFit: 'cover',  // Ensures the video covers the full area without stretching
              zIndex: -10  // Places the video under other content
            }}
            src={video2}  // Assuming hero1 is your video file path now
            className='video1'
          >
            Your browser does not support the video tag.
          </video>
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
                top: '0%',
                left: '50%',
                transform: 'translate(-50%, -35%)',  // Centers the video exactly in the viewport
                objectFit: 'cover',  // Ensures the video covers the full area without stretching
                zIndex: -10  // Places the video under other content
              }}
              src={video2}  // Assuming hero1 is your video file path now
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
              <div className="md:mt-4 lg:mt-24 max-w-7xl  md:mb-0">
                <h3 className="font-garamond text-cream1 font-normal italic tracking-widest scroll-m-20 text-2xl md:text-4xl lg:text-4xl">
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
