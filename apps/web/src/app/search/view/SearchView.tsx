import React, { Suspense } from 'react';
import HotTrendSection from '../components/HotTrendSection';
import PerfectMatchSection from '../components/RecommendSection';

const SearchView = () => {
  return (
    <div className="flex-1 bg-white pb-[20px]">
      <div className="px-[20px] pb-[52px] pt-[37px]">
        <Suspense>
          <HotTrendSection />
        </Suspense>
      </div>
      <div className="pl-[20px]">
        <Suspense>
          <PerfectMatchSection />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchView;
