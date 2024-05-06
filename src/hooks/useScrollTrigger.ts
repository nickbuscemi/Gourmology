import { useEffect, useRef, useState, RefObject } from 'react';

function useScrollTrigger(): [boolean, RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);;  // Initialized to null

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current!);  // Asserting that domRef.current is non-null
      }
    });

    if (domRef.current) {  // Check if domRef.current is not null
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.disconnect();
      }
    };
  }, []);  // Empty dependency array means this runs once after the initial render

  return [isVisible, domRef];
}

export default useScrollTrigger;



