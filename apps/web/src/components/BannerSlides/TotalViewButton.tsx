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
    <div className="absolute bottom-5 right-5 z-10 overflow-hidden rounded-full p-2 text-white">
      <Link className="flex gap-2" href={totalViewURL}>
        <span className="tracking-widest">
          <span>{currentSlideIndex}/</span>
          <span className="opacity-50">{totalLength}</span>
        </span>
        <span>{totalViewText}</span>
      </Link>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-25"></div>
    </div>
  );
}
