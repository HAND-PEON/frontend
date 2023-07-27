import Link from 'next/link';

import { Convenience } from '@/app/type';
import HotTrendCard, { HotTrendCardSkeletons } from '@/components/HotTrendItem';
import ChevronIcon from '@/components/icons/ChevronIcon';
import { HotTrendMapping } from '@/constants/conveniences';
import { useGetHotTrendGoods } from '@/hooks/query/useHotTrends';
import WithRepeatComponent from '@/utils/WithRepeatComponent';

interface HotTrendProps {
  convenience: Convenience;
}

const mappingSegments: Record<Convenience, string> = {
  ALL: 'CU',
  CU: 'CU',
  GS25: 'GS25',
  '7Eleven': '7Eleven',
  Emart24: 'Emart24',
} as const;

export default function HotTrend({ convenience }: HotTrendProps) {
  const { data } = useGetHotTrendGoods(HotTrendMapping[convenience]);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-start gap-y-5">
        {data?.map((props, idx) => (
          <HotTrendCard key={`${idx}-${props.goodsName}`} {...props} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          href={`/hottrend/${mappingSegments[convenience]}/1`}
          className="block w-full rounded-[7px] bg-[#1E1C1C] py-3 text-white"
        >
          <span className="flex items-center justify-center gap-1">
            더보기
            <ChevronIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export function HotTrendSkeleton() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-start gap-y-5">
        <HotTrendCardSkeletons length={3} />
      </div>
    </div>
  );
}

HotTrend.Skeleton = HotTrendSkeleton;
