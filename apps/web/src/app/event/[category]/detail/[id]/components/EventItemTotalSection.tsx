import EventItemCard from '@/components/EventItemCard';
import { pyeonImage } from '@/dummy/image';
import Link from 'next/link';
import React from 'react';

const EventItemTotalSection = () => {
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
        {Array.from({ length: 8 }).map((_, i) => (
          <EventItemCard
            key={i}
            eventItem={{
              eventType: 'ONE_PLUS_ONE',
              imageUrl: pyeonImage,
              price: 20000,
              title: 'asdfasdf',
              convenience: '7Eleven',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventItemTotalSection;
