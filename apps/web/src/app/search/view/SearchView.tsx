import React from 'react';
import HotTrendSection from '../components/HotTrendSection';
import PerfectMatchSection from '../components/PerfectMatchSection';

const SearchView = () => {
  return (
    <div className="flex-1 bg-white pb-[20px]">
      <div className="px-[20px] pb-[52px] pt-[37px]">
        <HotTrendSection />
      </div>
      <div className="pl-[20px]">
        <PerfectMatchSection />
      </div>
    </div>
  );
};

export default SearchView;
