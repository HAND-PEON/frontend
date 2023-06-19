'use client';

import { ReactNode } from 'react';

interface OneBarProps {
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default function OneBar({ isActive, children, onClick }: OneBarProps) {
  return (
    <div
      className={`flex flex-1 justify-center rounded-full py-[10px]
      ${isActive && 'bg-[#1E1C1C] text-white'}   
    `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
