'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface OneTabProps {
  isActive?: boolean;
  children: ReactNode;
  href?: string;
  isRouterReplace?: boolean;
  onClick?: () => void;
}

export default function OneCategory({
  isActive,
  children,
  href = '',
  isRouterReplace,
  onClick,
}: OneTabProps) {
  return (
    <div
      className={`flex-shrink flex-grow basis-0 text-center
      ${isActive && 'font-bold shadow-[inset_0_-3px_0_0_#73F69D]'}
      `}
      onClick={onClick}
    >
      <Link className="block py-[14px]" href={href} replace={isRouterReplace}>
        {children}
      </Link>
    </div>
  );
}
