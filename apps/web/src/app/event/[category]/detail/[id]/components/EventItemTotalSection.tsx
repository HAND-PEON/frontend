'use client';
import { PromotionGoodsCategory } from '@/apis/type';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import { EventMapping } from '@/constants/conveniences';
import { useGetFirstPagePromotionGoodsList } from '@/hooks/query/usePromotion';
import Link from 'next/link';
import React from 'react';

interface EventItemTotalSectionProps {
  category: Convenience;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

const EventItemTotalSection = ({ category }: EventItemTotalSectionProps) => {
  const { data } = useGetFirstPagePromotionGoodsList({
    type: EventMapping[category],
  });
  return (
    <div className="px-[20px] pb-[75px] pt-[34.5px]">
      <div className="flex items-center justify-between pb-[39.5px]">
        <span className="text-lg font-bold">이번주 행사 상품</span>
        <Link href={'/event/ALL'}>
          <button className="text-medium rounded-[20px] bg-black px-[8px] py-[3px] text-sm font-semibold text-white">
            전체보기
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {data.data.map((promotion) => (
          <EventItemCard
            key={promotion.goodsNo}
            eventItem={{
              eventType: promotion.promotionType,
              imageUrl: promotion.goodsImageUrl,
              price: promotion.goodsPrice,
              title: promotion.goodsName,
              goodsNo: promotion.goodsNo,
              convenience: mappingSegments[promotion.storeName],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventItemTotalSection;
