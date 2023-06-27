import React from 'react';
import Image from 'next/image';
import { Convenience } from '@/app/type';
import { formatNumberWithComma } from '@/app/type';

interface EventItem {
  eventType: 'BOGO' | 'BTGO' | 'SALE' | 'BONUS';
  imageUrl?: string;
  price: number;
  title: string;
  Convenience: Convenience;
}

const EventTypeTag: Record<
  EventItem['eventType'],
  { text: string; bg: string }
> = {
  BOGO: { text: '1+1', bg: 'bg-[#73F69D]' },
  BTGO: { text: '2+1', bg: 'bg-[#E2F981]' },
  SALE: { text: '할인', bg: 'bg-[#FFA8A5]' },
  BONUS: { text: '+덤', bg: 'bg-[#C29DF6]' },
};

interface Props {
  EventItem: EventItem;
}

const EventItemCard = ({ EventItem }: Props) => {
  return (
    <div className="w-[164px]">
      <div className="mb-[12px] h-[164px] w-full rounded-[9px] border-2 border-b-[4px] border-r-[4px] border-black p-[5px]">
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className={`absolute left-0 top-0 z-10 flex h-[24px] w-min items-center justify-center whitespace-nowrap rounded-[20px] border border-black px-[10px] ${
              EventTypeTag[EventItem.eventType].bg
            }`}
          >
            <span className="text-xs font-bold">
              {EventTypeTag[EventItem.eventType].text}
            </span>
          </div>
          <div className="max-h-[150px] min-h-[150px] min-w-[150px] max-w-[150px] rounded-[3px]">
            {EventItem.imageUrl && (
              <Image
                className="rounded-[3px] object-contain"
                src={EventItem.imageUrl}
                alt="pyeon-event-image"
                fill
              />
            )}
          </div>
        </div>
      </div>
      <div className="mb-[8px] flex w-min items-center justify-center rounded-[4px] border border-black bg-white px-[7px] py-[2px]">
        <span className="text-xs font-bold">{EventItem.Convenience}</span>
      </div>
      <div className="leading-5">
        <div className="truncate">
          <span>{EventItem.title}</span>
        </div>
        <div>
          <span className="font-bold">
            {`${formatNumberWithComma(EventItem.price)}원`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventItemCard;
