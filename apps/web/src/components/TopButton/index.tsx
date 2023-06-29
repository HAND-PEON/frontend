'use client';
import useTopScroll from '@/hooks/useTopScroll';
import React from 'react';

const TopButton = () => {
  const isTopScroll = useTopScroll(false);
  const moveToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return isTopScroll ? (
    <button
      className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#eaeaef] bg-white drop-shadow-sm"
      onClick={moveToTop}
    ></button>
  ) : null;
};

export default TopButton;
