import BasicLayout from '@/components/BasicLayout';
import HotTrendSection from './components/HotTrendSection';
import React from 'react';

const SearchPage = () => {
  return (
    <BasicLayout isSearchHeader>
      <div className="flex-1 bg-white ">
        <div className="px-[20px] pt-[37px]">
          <HotTrendSection />
        </div>
      </div>
    </BasicLayout>
  );
};

export default SearchPage;
