import { Convenience } from '@/app/type';
import BasicLayout from '@/components/BasicLayout';
import HomeIconButton from '@/components/HomeIconButton';
import SearchIconButton from '@/components/SearchIconButton';
import TabCategory from '@/components/TabCategory';
import TopButton from '@/components/TopButton';
import { CONVENIENCE } from '@/constants/conveniences';
import React from 'react';
import EventItemDetailSection from './components/EventItemDetailSection';
import EventItemTotalSection from './components/EventItemTotalSection';

const categoryInfoList = CONVENIENCE.map((convenience) => ({
  label: convenience,
  href: `/event/${convenience}`,
}));

interface EventItemDetailPageProps {
  params: { category: Convenience; id: string };
}

const EventItemDetailPage = ({
  params: { category, id },
}: EventItemDetailPageProps) => {
  return (
    <BasicLayout
      hasBackButton
      headerCenter={'이번주 행사 상품'}
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton />
        </div>
      }
    >
      <div>
        <div className="sticky top-[58px] z-40">
          <TabCategory
            categoryData={categoryInfoList}
            currentCategory={category}
            isRouterReplace={true}
          />
        </div>
        <div className="border-b border-[#D7D7D7] bg-white">
          <EventItemDetailSection />
        </div>
        <div className="mt-[15px] bg-white">
          <EventItemTotalSection />
        </div>
        <div className="fixed bottom-7 right-6 z-50 ml-auto mr-auto">
          <TopButton />
        </div>
      </div>
    </BasicLayout>
  );
};

export default EventItemDetailPage;
