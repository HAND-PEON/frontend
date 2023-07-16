'use client';
import React, { useEffect, useState } from 'react';
import BlueLogo from '/public/loading/blue-logo.svg';
import GreenLogo from '/public/loading/green-logo.svg';
import PurpleLogo from '/public/loading/purple-logo.svg';
import YellowLogo from '/public/loading/yellow-logo.svg';

const iconList = [
  <BlueLogo key="bluelogo" />,
  <GreenLogo key="greenlogo" />,
  <PurpleLogo key="purplelogo" />,
  <YellowLogo key="yellowlogo" />,
];

const LoadingIndicator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iconList.length);
    }, 200);

    return () => clearTimeout(intervalId);
  }, [currentIndex]);

  return (
    <div className="fixed right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
      <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white">
        {iconList[currentIndex]}
      </div>
    </div>
  );
};

export default LoadingIndicator;
