import { Convenience } from '@/app/type';
import BasicLayout from '@/components/BasicLayout';
import Chip from '@/components/Chip';
import EventItemCard from '@/components/EventItemCard';
import TabCategory from '@/components/TabCategory';
import { pyeonImage } from '@/dummy/image';
import TopButton from '@/components/TopButton';
import React from 'react';

const conveniences: Convenience[] = ['ALL', 'CU', 'GS25', '7Eleven', 'Emart24'];
const categoryInfoList = conveniences.map((convenience) => ({
  label: convenience,
  href: `/event/${convenience}`,
}));
const eventCategory = ['1+1', '2+1', '할인', '덤'];

interface EventCategoryPageProps {
  params: { category: Convenience };
}

const EventCategoryPage = ({
  params: { category },
}: EventCategoryPageProps) => {
  return (
    <BasicLayout>
      <div className="relative flex-1">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
        />
        <div className="pb-[18px] pt-[40px]">
          <span className="text-[1.375rem] font-bold">이번주 행사 품목</span>
        </div>
        <div className="pb-[29px]">
          <Chip>
            {eventCategory.map((item, index) => (
              <Chip.Item myIndex={index} key={index} text={item} />
            ))}
          </Chip>
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
        <div className="fixed bottom-7 right-6 z-50 ml-auto mr-auto">
          <TopButton />
        </div>
      </div>
    </BasicLayout>
  );
};

export default EventCategoryPage;
