'use client';
import { PromotionGoodsCategory } from '@/apis/type';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import ChevronIcon from '@/components/icons/ChevronIcon';
import { EventMapping } from '@/constants/conveniences';
import { useGetPromotionGoods } from '@/hooks/query/usePromotion';
import { useRouter } from 'next/navigation';

interface EventItemsProps {
  convenience: Convenience;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

function EventItems({ convenience }: EventItemsProps) {
  const router = useRouter();
  const { data } = useGetPromotionGoods({ type: EventMapping[convenience] });
  const goEventPage = () => {
    router.push(`/event/${convenience}`);
  };
  return (
    <div>
      <div className="mb-[50px] flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {data?.map((promotion, idx) => (
          <EventItemCard
            key={`${idx}-${promotion.goodsNo}`}
            eventItem={{
              eventType: promotion.promotionType,
              imageUrl: promotion.goodsImageUrl,
              price: promotion.goodsPrice,
              title: promotion.goodsName,
              convenience: mappingSegments[promotion.storeName],
            }}
          />
        ))}
      </div>
      <button
        className="w-full rounded-[7px] bg-[#1E1C1C] py-[12px] text-white"
        onClick={goEventPage}
      >
        <span className="flex items-center justify-center gap-1">
          행사상품 더 보기
          <ChevronIcon />
        </span>
      </button>
    </div>
  );
}

const EventItemsSkeleton = () => {
  return (
    <div className="mb-[50px] flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
      {Array.from({ length: 8 }, (_, i) => i).map((_, k) => (
        <div className="w-[calc(50%_-_9px)] animate-pulse" key={k}>
          <div className="aspect-square w-full rounded bg-slate-200" />
          <hr className="h-[10px]" />
          <div className="flex flex-col gap-1">
            <div className="h-[9px] w-[35px] rounded bg-slate-200"></div>
            <div className="h-[12px] w-full rounded bg-slate-200"></div>
            <div className="h-[12px] w-1/2 rounded bg-slate-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

EventItems.Skeleton = EventItemsSkeleton;

export default EventItems;
