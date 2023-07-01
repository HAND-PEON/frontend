import React from 'react';
import EventItemDetailCard from './EventItemDetailCard';
import BannerSlides from '@/components/BannerSlides';
import { pyeonImage } from '@/dummy/image';
import { BANNER_DATA } from '@/constants/assets';

const EventItemDetailSection = () => {
  return (
    <div className="px-[20px]">
      <div className="pb-[20px] pt-[29px]">
        <span className="text-[1.375rem] font-bold">이번주 행사 상품</span>
      </div>
      <div className="pb-[37px]">
        <EventItemDetailCard
          category="Emart24"
          eventType="BONUS"
          imageUrl={pyeonImage}
          productName="스프라이트P500ml"
          price={2000}
        />
      </div>
      <div className=" pb-[30px]">
        <div className="h-[178px] overflow-hidden rounded-[10px]">
          <BannerSlides data={BANNER_DATA} totalViewURL="/recommend" />
        </div>
      </div>
    </div>
  );
};

export default EventItemDetailSection;
