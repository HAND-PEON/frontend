import { Convenience } from '@/app/type';
import BasicLayout from '@/components/BasicLayout';
import TabCategory from '@/components/TabCategory';
import TopButton from '@/components/TopButton';
import React from 'react';
import EventItemSection from './EventItemSection';
import HomeIcon from '@/components/icons/HomeIcon';
import SearchIcon from '@/components/icons/SearchIcon';

const conveniences: Convenience[] = ['ALL', 'CU', 'GS25', '7Eleven', 'Emart24'];
const categoryInfoList = conveniences.map((convenience) => ({
  label: convenience,
  href: `/event/${convenience}`,
}));

interface EventCategoryPageProps {
  params: { category: Convenience };
}

const EventCategoryPage = ({
  params: { category },
}: EventCategoryPageProps) => {
  return (
    <BasicLayout
      hasBackButton
      headerCenter={'이번주 행사 품목'}
      headerRight={
        <div className="flex items-center">
          <button className="p-[8px]">
            <HomeIcon />
          </button>
          <button className="mr-[_-8px] p-[8px]">
            <SearchIcon type="black" />
          </button>
        </div>
      }
    >
      <div className="relative flex-1 pb-[75px]">
        <div className="sticky top-[58px] z-40">
          <TabCategory
            categoryData={categoryInfoList}
            currentCategory={category}
            isRouterReplace={true}
          />
        </div>
        <EventItemSection />
        <div className="fixed bottom-7 right-6 z-50 ml-auto mr-auto">
          <TopButton />
        </div>
      </div>
    </BasicLayout>
  );
};

export default EventCategoryPage;
