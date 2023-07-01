import { Convenience, EventType } from '@/app/type';
import { formatNumberWithComma } from '@/utils/numberFormatter';
import Image from 'next/image';
import { EVENT_TYPE_MAP } from '@/constants/conveniences';

interface EventItemDetailCardProps {
  category: Convenience;
  eventType: EventType;
  imageUrl: string;
  productName: string;
  price: number;
}

const EventItemDetailCard = ({
  category,
  eventType,
  imageUrl,
  productName,
  price,
}: EventItemDetailCardProps) => {
  return (
    <div className="border-[2px] border-black bg-white">
      {/* 헤더 */}
      <div className="flex border-b-[2px] border-black">
        <div className="flex h-[36px] flex-1 items-center justify-center bg-black p-[9px] text-lg font-bold text-white">
          {category}
        </div>
        <div
          className={`flex h-[36px] flex-1 items-center justify-center p-[9px] text-lg font-bold ${EVENT_TYPE_MAP[eventType].bg}`}
        >
          {EVENT_TYPE_MAP[eventType].text}
        </div>
      </div>
      {/* 이미지 */}
      <div className="flex h-[163px] items-center justify-center border-b-[2px] border-black">
        <Image
          src={imageUrl}
          alt="pyeon detail image"
          width={150}
          height={150}
          priority
        />
      </div>
      {/* 상품명 */}
      <div className="border-b-[2px] border-black px-[15px] py-[7px] text-lg font-bold">
        {productName}
      </div>
      {/* 가격 */}
      <div className="px-[15px] py-[7px] text-lg font-bold">
        {`${formatNumberWithComma(price)}원`}
      </div>
    </div>
  );
};

export default EventItemDetailCard;
