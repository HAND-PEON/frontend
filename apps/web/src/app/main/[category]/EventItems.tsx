'use client';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import ChevronIcon from '@/components/icons/ChevronIcon';
import { pyeonImage } from '@/dummy/image';
import { useRouter } from 'next/navigation';

interface EventItemsProps {
  convenience: Convenience;
}

export default function EventItems({ convenience }: EventItemsProps) {
  const router = useRouter();
  const goEventPage = () => {
    router.push(`/event/${convenience}`);
  };
  return (
    <div className="rounded-t-[30px] bg-white px-[20px] pb-[10px] pt-[27px]">
      <div className="mb-[50px] flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <EventItemCard
            key={i}
            eventItem={{
              eventType: 'BONUS',
              imageUrl: pyeonImage,
              price: 20000,
              title: 'asdfasdf',
              convenience: '7Eleven',
            }}
          />
        ))}
      </div>
      <button
        className="w-full rounded-[7px] bg-[#1E1C1C] py-[12px] text-white"
        onClick={goEventPage}
      >
        <span className="flex items-center justify-center gap-1">
          행사상품 더 보기
          <ChevronIcon />
        </span>
      </button>
    </div>
  );
}
