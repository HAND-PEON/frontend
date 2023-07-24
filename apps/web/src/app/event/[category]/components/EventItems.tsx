'use client';
import { PromotionGoodsCategory } from '@/apis/type';
import { EventType, type Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import { EventMapping } from '@/constants/conveniences';
import { useGetPromotionGoodsList } from '@/hooks/query/usePromotion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface EventItemsProps {
  category: Convenience;
  eventType: EventType;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

const EventItems = ({ category, eventType }: EventItemsProps) => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetPromotionGoodsList({
    type: EventMapping[category],
    promotionType: eventType,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && data?.pages) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {data?.pages.map((page) =>
          page.data.map((promotion, idx) => (
            <EventItemCard
              key={`${idx}-${promotion.goodsNo}`}
              eventItem={{
                eventType: promotion.promotionType,
                imageUrl: promotion.goodsImageUrl,
                price: promotion.goodsPrice,
                title: promotion.goodsName,
                goodsNo: promotion.goodsNo,
                convenience: mappingSegments[promotion.storeName],
              }}
            />
          )),
        )}
      </div>
      {isFetchingNextPage ? <div>Loading...</div> : <div ref={ref} />}
    </>
  );
};

const EventItemsSkeleton = () => {
  return (
    <div className="mb-[50px] flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
      {Array.from({ length: 8 }, (_, i) => i).map((_, k) => (
        <EventItemCard.Skeleton key={k} />
      ))}
    </div>
  );
};

EventItems.Skeleton = EventItemsSkeleton;

export default EventItems;
