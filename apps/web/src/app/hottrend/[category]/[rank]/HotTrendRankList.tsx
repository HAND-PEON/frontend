import { Convenience } from '@/app/type';
import HotTrendCard from '@/components/HotTrendItem';
import { mainHotTrendData } from '@/dummy/hotTrend';

interface HotTrendRankListProps {
  category: Convenience;
}

export default function HotTrendRankList({ category }: HotTrendRankListProps) {
  const hotTrendData = mainHotTrendData.filter(
    (one) => one.convenience === category,
  );

  return (
    <div className="hdr s mt-4 bg-white px-5 py-9">
      <div className="title text-[22px] font-bold">
        <div className="flex items-center">
          이번주 [
          <div className="relative mx-2">
            <span className="relative z-10">{category}</span>
            <hr className="absolute bottom-[5px] left-0 h-3 w-full bg-[#ffd700]" />
          </div>
          ]
        </div>
        <div>Hot Trend🔥 랭킹</div>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        {hotTrendData.map((props) => (
          <HotTrendCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
