import ChevronIcon from '@/components/icons/ChevronIcon';

import { Convenience } from '../../type';

interface HotTrendProps {
  convenience: Convenience;
}

export default function HotTrend({ convenience }: HotTrendProps) {
  return (
    <div className="rounded-t-[30px] bg-white px-5 pb-10 pt-[27px]">
      <div className="flex flex-wrap items-start justify-start gap-y-5">
        핫트렌드 영역
      </div>
      <div className="mt-10">
        <button className="w-full rounded-[7px] bg-[#1E1C1C] py-3 text-white">
          <span className="flex items-center justify-center gap-1">
            더보기
            <ChevronIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
