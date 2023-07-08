import { throttle } from '@/utils/throttle';
import { useCallback, useEffect, useState } from 'react';

const useScrollDriectionDetect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const updateScroll = () => {
    const currentPosition = window.scrollY;
    console.log('currentPosition', currentPosition);
    setScrollPosition(currentPosition);
    if (currentPosition > scrollPosition) {
      setIsScrollDown(true);
    } else if (currentPosition < scrollPosition) {
      setIsScrollDown(false);
    }
  };

  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return isScrollDown;
};

export default useScrollDriectionDetect;
