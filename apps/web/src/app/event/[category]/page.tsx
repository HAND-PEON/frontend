import { Convenience } from '@/app/type';
import BasicLayout from '@/components/BasicLayout';
import TabCategory from '@/components/TabCategory';
import TopButton from '@/components/TopButton';
import React from 'react';
import EventItemSection from './components/EventItemSection';
import HomeIconButton from '@/components/HomeIconButton';
import SearchIconButton from '@/components/SearchIconButton';
import { CONVENIENCE } from '@/constants/conveniences';

const categoryInfoList = CONVENIENCE.map((convenience) => ({
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
      headerCenter={'이번주 행사 상품'}
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton type="white" />
        </div>
      }
    >
      <div className="bg-white pb-[75px]">
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
