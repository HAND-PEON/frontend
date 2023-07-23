'use client';
import { type EventType, type Convenience } from '@/app/type';
import Chip from '@/components/Chip';
import { EVENT_TYPE_LIST } from '@/constants/conveniences';
import React, { Suspense, useState } from 'react';
import EventItems from './EventItems';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';

interface EventItemSectionProps {
  category: Convenience;
}

const EventItemSection = ({ category }: EventItemSectionProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const [eventType, setEventType] = useState<EventType>('ONE_PLUS_ONE');
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
              onClickChipItem={() => setEventType(item.type)}
            >
              {item.text}
            </Chip.Item>
          ))}
        </Chip>
      </div>
      <ApiErrorBoundary onReset={reset}>
        <Suspense fallback={<EventItems.Skeleton />}>
          <EventItems category={category} eventType={eventType} />
        </Suspense>
      </ApiErrorBoundary>
    </div>
  );
};

export default EventItemSection;
