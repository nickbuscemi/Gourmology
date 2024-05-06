import { useEffect, useState } from 'react';

function useHeroScrollTrigger() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrollingDown(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return isScrollingDown;
}

export default useHeroScrollTrigger;
