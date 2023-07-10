import React from 'react';
import { BANNER_DATA } from '@/constants/assets';
import PerfectMatchSlides from './PerfectMatchSlides';
const PerfectMatchSection = () => {
  return (
    <div>
      <div className="pb-[23px]">
        <span className="text-[1.375rem] font-bold text-[#1E1C1C]">
          편슐랭 가이드 📕
        </span>
      </div>
      <div className="h-[210px] w-full">
        <PerfectMatchSlides data={BANNER_DATA} />
      </div>
    </div>
  );
};

export default PerfectMatchSection;
