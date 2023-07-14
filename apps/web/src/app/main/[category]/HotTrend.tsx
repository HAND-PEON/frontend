import { HotTrendCategory } from '@/apis/type';
import HotTrendCard from '@/components/HotTrendItem';
import ChevronIcon from '@/components/icons/ChevronIcon';
import { useGetHotTrendGoods } from '@/hooks/query/useHotTrends';

interface HotTrendProps {
  convenience: HotTrendCategory;
}

export default function HotTrend({ convenience }: HotTrendProps) {
  const { data } = useGetHotTrendGoods(convenience);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-start gap-y-5">
        {data?.map((props, idx) => (
          <HotTrendCard key={`${idx}-${props.goodsName}`} {...props} />
        ))}
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
