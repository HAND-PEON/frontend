'use client';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import TabCategory from '@/components/TabCategory';
import { CONVENIENCE } from '@/constants/conveniences';
import { pyeonImage } from '@/dummy/image';
import { useSearchParams } from 'next/navigation';

const SearchResultView = () => {
  const searchParams = useSearchParams();
  const word = searchParams.get('word');
  const category = searchParams.get('category') as Convenience;
  const categoryInfoList = CONVENIENCE.map((convenience) => ({
    label: convenience,
    href: `/search?word=${word}&category=${convenience}`,
  }));

  return (
    <div className="flex-1 bg-white pb-[20px]">
      <div className="sticky top-[72px] z-30">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
        />
      </div>
      <div className="px-[20px]">
        <div className="pb-[25px] pt-[40px] text-xl font-bold">
          <span>292개의 검색결과</span>
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
    </div>
  );
};

export default SearchResultView;
