import Image from 'next/image';
import Link from 'next/link';

import { Convenience } from '@/app/type';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import CrownIcon from '@/components/icons/CrownIcon';
import { hotTrendInfoData } from '@/dummy/hotTrend';
import { formatNumberWithComma, prefixZero } from '@/utils/numberFormatter';

interface HotTrendInfoProps {
  convenience: Convenience;
  rank: number;
}

export default function HotTrendInfo({ convenience, rank }: HotTrendInfoProps) {
  const info = hotTrendInfoData.find(
    (data) => data.rank === Number(rank) && data.convenience === convenience,
  );

  return (
    <div className="bg-white px-5 pb-9 pt-5 font-bold">
      <div className="py-[10px] text-[22px] ">이번주 Hot Trend</div>
      <div className="">
        <div className="flex justify-between border-2 border-[#1E1C1C] bg-[#1E1C1C] px-[15px] py-[9px] text-white">
          <span className="flex items-center gap-[7px]">
            <CrownIcon />
            {prefixZero(info.rank)}
          </span>
          <span className="">Hot Ranking 🔥</span>
        </div>
        <div className="flex border-2 border-[#1E1C1C]">
          <div>
            <div className="break-keep px-[17px] py-[21px]">
              {info.hottrendTitle}
            </div>
            <div className="border-t-2 border-[#1E1C1C] px-[17px] py-[4px] font-medium">
              <div>{info.title}</div>
              <div>{formatNumberWithComma(info.price)}원</div>
            </div>
          </div>
          <div className="min-w-[152px] border-l-2 border-[#1E1C1C] p-2">
            <div className="relative flex h-full w-full ">
              <Image
                className="object-contain"
                src={info.imageUrl}
                alt={info.title}
                fill
              />
            </div>
          </div>
        </div>
        <div className="break-keep border-x-2 border-[#1E1C1C] px-[40px] py-[9px] text-center text-[15px] font-medium">
          {info.hottrendContent}
        </div>
        <div className=" border-2 border-[#1E1C1C]">
          <Link
            className="flex w-full items-center justify-center gap-1 bg-[#D3EB6E] p-[9px]"
            href={''}
          >
            <span className="text-[15px] font-bold">더 알아보기</span>
            <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
