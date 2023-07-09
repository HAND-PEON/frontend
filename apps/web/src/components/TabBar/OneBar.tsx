'use client';

import { ReactNode } from 'react';

interface OneBarProps {
  classNmae?: string;
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default function OneBar({
  classNmae,
  isActive,
  children,
  onClick,
}: OneBarProps) {
  return (
    <div
      className={`py-10px flex flex-1 justify-center rounded-full ${classNmae}
      ${isActive && 'bg-[#1E1C1C] text-white'}   
    `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
