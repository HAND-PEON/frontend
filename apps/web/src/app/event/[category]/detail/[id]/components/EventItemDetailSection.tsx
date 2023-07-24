'use client';
import React from 'react';
import EventItemDetailCard from './EventItemDetailCard';
import BannerSlides from '@/components/BannerSlides';
import { BANNER_DATA } from '@/constants/assets';
import { useGetPromotionGoods } from '@/hooks/query/usePromotion';
import type { PromotionGoodsCategory } from '@/apis/type';
import type { Convenience } from '@/app/type';
import { useGetRecommendationContents } from '@/hooks/query/useRecommendation';

interface EventItemDetailSectionProps {
  goodsNo: number;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

const EventItemDetailSection = ({ goodsNo }: EventItemDetailSectionProps) => {
  const { data } = useGetPromotionGoods(goodsNo);
  const { data: bannerData } = useGetRecommendationContents();
  return (
    <div className="px-[20px]">
      <div className="pb-[20px] pt-[29px]">
        <span className="text-[1.375rem] font-bold">이번주 행사 상품</span>
      </div>
      <div className="pb-[37px]">
        <EventItemDetailCard
          category={mappingSegments[data.storeName]}
          eventType={data.promotionType}
          imageUrl={data.goodsImageUrl}
          productName={data.goodsName}
          price={data.goodsPrice}
        />
      </div>
      <div className=" pb-[30px]">
        <div className="h-[178px] overflow-hidden rounded-[10px]">
          <BannerSlides data={bannerData} totalViewURL="/recommendation" />
        </div>
      </div>
    </div>
  );
};

export default EventItemDetailSection;
