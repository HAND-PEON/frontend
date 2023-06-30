'use client';
import HomeIcon from '@/components/icons/HomeIcon';
import useGoHome from '@/hooks/useGoHome';
import React from 'react';

const HomeIconButton = () => {
  const goHome = useGoHome();
  return (
    <button className="p-[8px]" onClick={goHome}>
      <HomeIcon />
    </button>
  );
};

export default HomeIconButton;
