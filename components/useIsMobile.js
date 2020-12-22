import { useState, useEffect } from 'react';

const checkIsMobile = (windowWidth) => {
  return windowWidth && windowWidth <= 900;
}

const useIsMobile = () => {
  const isWindowClient = typeof window === 'object';

  const [isMobile, setIsMobile] = useState(isWindowClient ? checkIsMobile(window.innerWidth) : false)

  useEffect(() => {
    const setSize = () => {
      setIsMobile(checkIsMobile(window.innerWidth));
    };

    if (isWindowClient) {
      window.addEventListener('resize', setSize);
      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, setIsMobile]);

  return isMobile;
};

export default useIsMobile;
