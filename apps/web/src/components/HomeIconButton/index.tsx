'use client';
import HomeIcon from '@/components/icons/HomeIcon';
import Link from 'next/link';
import React from 'react';

const HomeIconButton = () => {
  return (
    <Link href={'/main/ALL'}>
      <button className="p-[8px]">
        <HomeIcon />
      </button>
    </Link>
  );
};

export default HomeIconButton;
