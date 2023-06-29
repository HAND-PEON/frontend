import Image from 'next/image';

import { Convenience } from '@/app/type';
import { pyeonImage } from '@/dummy/image';
import { formatNumberWithComma, prefixZero } from '@/utils/numberFormatter';

interface HotTrendCardProps {
  id: string | number;
  rank: number;
  imageUrl: string;
  price: number;
  title: string;
  convenience: Convenience;
}

export default function HotTrendCard({
  id,
  rank,
  imageUrl = pyeonImage,
  price,
  title,
  convenience,
}: HotTrendCardProps) {
  return (
    <div className="min-h-[165px]  w-full">
      <div className="relative flex  h-[165px] rounded-[9px] border-2 border-b-[3px] border-r-[7px] border-[#1E1C1C] p-[10px]">
        <div className="relative my-2 ml-[27px] flex-1">
          <Image
            className="object-contain"
            src={imageUrl}
            fill
            alt={`hottrend-${title}`}
          />
        </div>
        <div className="mt-[46px] w-[168px]">
          <div>
            <span className="rounded-sm border-[1px] border-[#1E1C1C] px-[7px] py-[2px] font-bold leading-none">
              {convenience}
            </span>
          </div>
          <div className="mt-[11px] truncate text-base font-medium	leading-none">
            {title}
          </div>
          <div className="mt-[2px] leading-none">
            <span className="text-[22px] font-bold ">
              {formatNumberWithComma(price)}
            </span>
            <span>원</span>
          </div>
        </div>
        <div className="absolute bg-[#1E1C1C] p-2 text-[19px] font-extrabold leading-5 text-white">
          {prefixZero(rank)}
        </div>
      </div>
    </div>
  );
}
