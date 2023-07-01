'use client';

import Link from 'next/link';

interface TotalViewButtonProps {
  totalViewURL: string;
  totalViewText: string;
  currentSlideIndex: number;
  totalLength: number;
}

export default function TotalViewButton({
  totalViewURL,
  totalViewText,
  currentSlideIndex,
  totalLength,
}: TotalViewButtonProps) {
  return (
    <div className="absolute bottom-3 right-3 z-10 flex h-[24px] items-center justify-center overflow-hidden rounded-full px-[8px] text-white">
      <Link className="flex gap-2" href={totalViewURL}>
        <span className="text-xs tracking-widest">
          <span>{currentSlideIndex}/</span>
          <span className="opacity-50">{totalLength}</span>
        </span>
        <span className="text-xs">{totalViewText}</span>
      </Link>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-25"></div>
    </div>
  );
}
