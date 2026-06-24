import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../config/breakpoints';

export const useBreakpoints = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      // Debounce to improve performance and prevent excessive re-renders
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 50);
    };

    window.addEventListener('resize', handleResize);
    
    // Initial call just in case
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return {
    windowWidth,
    isMobileSm: windowWidth < BREAKPOINTS.MOBILE_SM,
    isMobileLg: windowWidth < BREAKPOINTS.MOBILE_LG,
    isTablet: windowWidth < BREAKPOINTS.TABLET,
    isDesktopSm: windowWidth >= BREAKPOINTS.DESKTOP_SM,
  };
};
