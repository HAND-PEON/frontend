import React from 'react';
import Image from 'next/image';
import { Convenience, EventCategory } from '@/app/type';
import { formatNumberWithComma } from '@/utils/numberFormatter';

interface EventItem {
  eventType: 'ONE_PLUS_ONE' | 'TWO_PLUS_ONE' | 'SALE' | 'BONUS';
  imageUrl: string;
  price: number;
  title: string;
  convenience: Convenience;
}

const EventTypeTag: Record<
  EventItem['eventType'],
  { text: EventCategory; bg: string }
> = {
  ONE_PLUS_ONE: { text: '1+1', bg: 'bg-[#73F69D]' },
  TWO_PLUS_ONE: { text: '2+1', bg: 'bg-[#E2F981]' },
  SALE: { text: '할인', bg: 'bg-[#FFA8A5]' },
  BONUS: { text: '+덤', bg: 'bg-[#C29DF6]' },
};

interface Props {
  eventItem: EventItem;
}

const EventItemCard = ({
  eventItem: { eventType, imageUrl, convenience, title, price },
}: Props) => {
  return (
    <div className="w-[calc(50%_-_9px)]">
      <div className="mb-[12px] aspect-square w-full rounded-[9px] border-2 border-b-[4px] border-r-[4px] border-black p-[5px]">
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className={`absolute left-0 top-0 z-10 flex h-[24px] w-min items-center justify-center whitespace-nowrap rounded-[20px] border border-black px-[10px] ${EventTypeTag[eventType].bg}`}
          >
            <span className="text-xs font-bold">
              {EventTypeTag[eventType].text}
            </span>
          </div>
          <div className="h-full w-full rounded-[3px]">
            {imageUrl && (
              <Image
                className="rounded-[3px] object-contain"
                src={imageUrl}
                alt="pyeon-event-image"
                fill
              />
            )}
          </div>
        </div>
      </div>
      <div className="mb-[8px] flex w-min items-center justify-center rounded-[4px] border border-black bg-white px-[7px] py-[2px]">
        <span className="text-xs font-bold">{convenience}</span>
      </div>
      <div className="leading-5">
        <div className="truncate">
          <span>{title}</span>
        </div>
        <div>
          <span className="font-bold">
            {`${formatNumberWithComma(price)}원`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventItemCard;
