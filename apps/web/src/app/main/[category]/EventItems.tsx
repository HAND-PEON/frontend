'use client';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import ChevronIcon from '@/components/icons/ChevronIcon';
import { pyeonImage } from '@/dummy/image';
import { useGetPromotionGoods } from '@/hooks/query/usePromotion';
import { useRouter } from 'next/navigation';

interface EventItemsProps {
  convenience: Convenience;
}

export default function EventItems({ convenience }: EventItemsProps) {
  const router = useRouter();
  const { data } = useGetPromotionGoods(convenience);
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
              convenience: promotion.storeName,
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
