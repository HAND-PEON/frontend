'use client';
import { PromotionGoodsCategory } from '@/apis/type';
import { type Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import { EVENT_TYPE_LIST, EventMapping } from '@/constants/conveniences';
import { useGetPromotionGoods } from '@/hooks/query/usePromotion';
import React from 'react';

interface EventItemsProps {
  category: Convenience;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

const EventItems = ({ category }: EventItemsProps) => {
  const { data } = useGetPromotionGoods({ type: EventMapping[category] });
  return (
    <div className="flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
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
  );
};

export default EventItems;
