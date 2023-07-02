import BasicLayout from '@/components/BasicLayout';
import HotTrendSection from './components/HotTrendSection';
import React from 'react';
import PerfectMatchSection from './components/PerfectMatchSection';

const SearchPage = () => {
  return (
    <BasicLayout hasSearchHeader>
      <div className="flex-1 bg-white pb-[134px]">
        <div className="px-[20px] pb-[52px] pt-[37px]">
          <HotTrendSection />
        </div>
        <div className="pl-[20px]">
          <PerfectMatchSection />
        </div>
      </div>
    </BasicLayout>
  );
};

export default SearchPage;
