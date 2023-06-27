import { Convenience } from '@/app/type';
import EventItemCard from './EventItemCard';
import ChevronIcon from '@/assets/chevron.svg';

interface EventItemsProps {
  convenience: Convenience;
}

const dummy = {
  eventType: 'BOGO',
  price: 200000,
  title: '백종원의 연탄불고기어쩌구저쩌구',
  Convenience: 'CU',
};

export default function EventItems({ convenience }: EventItemsProps) {
  return (
    <div className="rounded-t-[30px] bg-white px-[20px] pb-[10px] pt-[27px]">
      <div className="mb-[50px] flex flex-wrap gap-x-[18px] gap-y-[50px]">
        <EventItemCard
          EventItem={{
            eventType: 'BONUS',
            price: 20000,
            title: 'asdfasdf',
            Convenience: '7Eleven',
          }}
        />
        <EventItemCard EventItem={dummy} />
        <EventItemCard EventItem={dummy} />
        <EventItemCard EventItem={dummy} />
        <EventItemCard EventItem={dummy} />
        <EventItemCard EventItem={dummy} />
        <EventItemCard EventItem={dummy} />
      </div>
      <button className="w-full  rounded-[7px] bg-[#1E1C1C] py-[12px] text-white">
        <span className="flex items-center justify-center gap-1">
          {'행사상품 더 보기'}
          <ChevronIcon />
        </span>
      </button>
    </div>
  );
}
