'use client';
import { type Convenience } from '@/app/type';
import Chip from '@/components/Chip';
import { EVENT_TYPE_LIST } from '@/constants/conveniences';
import React, { Suspense } from 'react';
import EventItems from './EventItems';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';
import LoadingIndicator from '@/components/LoadingIndicator';

interface EventItemSectionProps {
  category: Convenience;
}

const EventItemSection = ({ category }: EventItemSectionProps) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="px-[20px]">
      <div className="pb-[18px] pt-[40px]">
        <span className="text-[1.375rem] font-bold">이번주 행사 상품</span>
      </div>
      <div className="pb-[29px]">
        <Chip>
          {EVENT_TYPE_LIST.map((item, index) => (
            <Chip.Item
              myIndex={index}
              key={index}
              onClickChipItem={() => console.log('클릭!')}
            >
              {item}
            </Chip.Item>
          ))}
        </Chip>
      </div>
      <ApiErrorBoundary onReset={reset}>
        <Suspense fallback={<LoadingIndicator />}>
          <EventItems category={category} />
        </Suspense>
      </ApiErrorBoundary>
    </div>
  );
};

export default EventItemSection;
