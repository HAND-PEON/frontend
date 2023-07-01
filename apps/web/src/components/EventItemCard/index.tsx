import React from 'react';
import Image from 'next/image';
import { Convenience, EventType } from '@/app/type';
import { formatNumberWithComma } from '@/utils/numberFormatter';
import { EVENT_TYPE_MAP } from '@/constants/conveniences';
import Link from 'next/link';
interface EventItem {
  eventType: EventType;
  imageUrl: string;
  price: number;
  title: string;
  convenience: Convenience;
}

interface Props {
  eventItem: EventItem;
}

const EventItemCard = ({
  eventItem: { eventType, imageUrl, convenience, title, price },
}: Props) => {
  return (
    <div className="w-[calc(50%_-_9px)]">
      <Link href={'/event/7Eleven/detail/1'}>
        <div className="mb-[12px] aspect-square w-full rounded-[9px] border-2 border-b-[4px] border-r-[4px] border-black p-[5px]">
          <div className="relative flex h-full w-full items-center justify-center">
            <div
              className={`absolute left-0 top-0 z-10 flex h-[24px] w-min items-center justify-center whitespace-nowrap rounded-[20px] border border-black px-[10px] ${EVENT_TYPE_MAP[eventType].bg}`}
            >
              <span className="text-xs font-bold">
                {EVENT_TYPE_MAP[eventType].text}
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
      </Link>
    </div>
  );
};

export default EventItemCard;
